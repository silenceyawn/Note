# 使用缓存

> 目录: [https://note.dolyw.com/seckill-evolution](https://note.dolyw.com/seckill-evolution)

**项目地址**

* Github：[https://github.com/dolyw/SeckillEvolution](https://github.com/dolyw/SeckillEvolution)
* Gitee(码云)：[https://gitee.com/dolyw/SeckillEvolution](https://gitee.com/dolyw/SeckillEvolution)

## 1. 思路介绍

这次我们引入**缓存**，这里可以先查看一篇文章: [Redis与数据库一致性](https://note.dolyw.com/cache/00-DataBaseConsistency.html)

一般秒杀都会提前预热缓存，我们添加一个**缓存预热**的方法，初始化库存后再**缓存预热**，这样不会出现**Cache**读取**Miss**的情况

这里我采用的是**先更新数据库再更新缓存**，因为这里**缓存数据计算简单**，只需要进行加减一即可，所以我们直接进行更新缓存

这次主要改造是**检查库存和扣库存**方法，**检查库存**直接去**Redis**获取，不再去查数据库，而在**扣库存**这里本身是使用的乐观锁操作，只有操作成功(扣库存成功)的才需要**更新缓存数据**

## 2. 代码实现

先定义三个全局常量

* **Constant**

```java
package com.example.constant;

/**
 * 常量
 *
 * @author wliduo[i@dolyw.com]
 * @date 2018/9/3 16:03
 */
public interface Constant {

    // 其他常量...

    /**
     * redis-key-前缀-count-库存
     */
    String PREFIX_COUNT = "stock:count:";

    /**
     * redis-key-前缀-sale-已售
     */
    String PREFIX_SALE = "stock:sale:";

    /**
     * redis-key-前缀-version-乐观锁版本
     */
    String PREFIX_VERSION = "stock:version:";

}
```

在**SeckillEvolutionController**创建缓存预热和乐观锁加缓存的订单入口两个方法

* **SeckillEvolutionController**

```java
/**
 * 缓存预热
 *
 * @param id 商品ID
 * @return com.example.common.ResponseBean
 * @throws
 * @author wliduo[i@dolyw.com]
 * @date 2019/11/22 15:59
 */
@PutMapping("/initCache/{id}")
public ResponseBean initCache(@PathVariable("id") Integer id) {
    StockDto stockDto = stockService.selectByPrimaryKey(id);
    // 商品缓存预热
    JedisUtil.set(Constant.PREFIX_COUNT + id.toString(), stockDto.getCount().toString());
    JedisUtil.set(Constant.PREFIX_SALE + id.toString(), stockDto.getSale().toString());
    JedisUtil.set(Constant.PREFIX_VERSION + id.toString(), stockDto.getVersion().toString());
    return new ResponseBean(HttpStatus.OK.value(), "缓存预热成功", null);
}

/**
 * 使用乐观锁下订单，并且添加读缓存，性能提升
 *
 * @param id 商品ID
 * @return com.example.common.ResponseBean
 * @throws Exception
 * @author wliduo[i@dolyw.com]
 * @date 2019/11/22 14:24
 */
@PostMapping("/createOptimisticLockOrderWithRedis/{id}")
public ResponseBean createOptimisticLockOrderWithRedis(@PathVariable("id") Integer id) throws Exception {
    Integer orderCount = seckillEvolutionService.createOptimisticLockOrderWithRedis(id);
    return new ResponseBean(HttpStatus.OK.value(), "购买成功", null);
}
```

在**Service**添加方法

* **ISeckillEvolutionService**

```java
/**
 * 使用乐观锁创建订单(解决卖超问题)，加缓存读，提升性能
 *
 * @param id
 * @return java.lang.Integer
 * @throws Exception
 * @author wliduo[i@dolyw.com]
 * @date 2019/11/22 14:21
 */
Integer createOptimisticLockOrderWithRedis(Integer id) throws Exception;
```

* **ISeckillEvolutionService**

```java
/**
 * 乐观锁加缓存方式(名称注入)，线程不安全
 */
@Autowired
@Qualifier("seckillOptimisticLockRedisService")
private ISeckillService seckillOptimisticLockRedisService;

@Override
@Transactional(rollbackFor = Exception.class)
public Integer createOptimisticLockOrderWithRedis(Integer id) throws Exception {
    // 检查库存
    StockDto stockDto = seckillOptimisticLockRedisService.checkStock(id);
    Thread.sleep(10);
    // 扣库存
    Integer saleCount = seckillOptimisticLockRedisService.saleStock(stockDto);
    if (saleCount <= 0) {
        throw new CustomException("扣库存失败");
    }
    Thread.sleep(10);
    // 下订单
    Integer orderCount = seckillOptimisticLockRedisService.createOrder(stockDto);
    if (saleCount <= 0) {
        throw new CustomException("下订单失败");
    }
    return orderCount;
}
```

### 2.1. 错误实现

然后创建一个**ISeckillService**的使用乐观锁方式的实现类提供上面使用

* **SeckillOptimisticLockRedisServiceImpl**

```java
package com.example.seckill.impl;

import ...;

import java.util.List;

/**
 * 使用乐观锁加缓存
 *
 * @author wliduo[i@dolyw.com]
 * @date 2019-11-20 18:03:33
 */
@Service("seckillOptimisticLockRedisService")
public class SeckillOptimisticLockRedisServiceImpl implements ISeckillService {

    /**
     * logger
     */
    private static final Logger logger = LoggerFactory.getLogger(SeckillOptimisticLockRedisServiceImpl.class);

    @Autowired
    private StockDao stockDao;

    @Autowired
    private StockOrderDao stockOrderDao;

    @Override
    public StockDto checkStock(Integer id) {
        // 使用缓存读取库存，减轻DB压力
        Integer count = Integer.parseInt(JedisUtil.get(Constant.PREFIX_COUNT + id));
        Integer sale = Integer.parseInt(JedisUtil.get(Constant.PREFIX_SALE + id));
        Integer version = Integer.parseInt(JedisUtil.get(Constant.PREFIX_VERSION + id));
        if (count > 0) {
            // 还有库存
            StockDto stockDto = new StockDto();
            stockDto.setId(id);
            stockDto.setCount(count);
            stockDto.setSale(sale);
            stockDto.setVersion(version);
            return stockDto;
        }
        throw new CustomException("库存不足");
    }

    @Override
    public Integer saleStock(StockDto stockDto) {
        Integer saleCount = stockDao.updateByOptimisticLock(stockDto);
        // 操作数据大于0，说明扣库存成功
        if (saleCount > 0) {
            logger.info("版本号:{} {} {}", stockDto.getCount(), stockDto.getSale(), stockDto.getVersion());
            Thread.sleep(10);
            // 更新缓存，这里更新需要保证三个数据(库存，已售，乐观锁版本号)的一致性，使用Redis事务
            updateCache(stockDto);
        }
        return saleCount;
    }

    /**
     * 这里遵循先更新数据库，再更新缓存，详细的数据库与缓存一致性解析可以查看
     * https://note.dolyw.com/cache/00-DataBaseConsistency.html
     *
     * @param stockDto
     * @return java.lang.Integer
     * @throws
     * @author wliduo[i@dolyw.com]
     * @date 2019/11/22 16:25
     */
    public void updateCache(StockDto stockDto) {
        // 获取事务
        Transaction transaction = null;
        try (Jedis jedis = JedisUtil.getJedis()) {
            // watch监视key，当事务执行之前这个key发生了改变，事务会被打断
            jedis.watch(Constant.PREFIX_COUNT + stockDto.getId(),
                    Constant.PREFIX_SALE + stockDto.getId(),
                    Constant.PREFIX_VERSION + stockDto.getId());
            // 开始事务
            transaction = jedis.multi();
            // 原子操作库存减一
            transaction.decr(Constant.PREFIX_COUNT + stockDto.getId());
            // 原子操作已售数和乐观锁版本号加一
            transaction.incr(Constant.PREFIX_SALE + stockDto.getId());
            transaction.incr(Constant.PREFIX_VERSION + stockDto.getId());
            // 执行exec后就会自动执行jedis.unwatch()操作
            List<Object> result = transaction.exec();
            if (result == null || result.isEmpty()) {
                // 事务失败了，可能是watch-key被外部修改，或者是数据操作被驳回
                logger.error("更新缓存失败: {}", stockDto.toString());
                // watch-key被外部修改时，transaction.discard()操作会被自动触发
            }
        } catch (Exception e) {
            logger.error("更新缓存失败: {}，异常原因: {}", stockDto.toString(), e.getMessage());
            if (transaction != null) {
                // 关闭事务
                transaction.discard();
            }
        }
    }

    @Override
    public Integer createOrder(StockDto stockDto) {
        StockOrderDto stockOrderDto = new StockOrderDto();
        stockOrderDto.setStockId(stockDto.getId());
        return stockOrderDao.insertSelective(stockOrderDto);
    }

}
```

一开始没考虑，结果发现这块读取代码会存在线程不安全的情况，比如有个线程读取**Resid**的**count**库存时，正好另一个已经执行的前面的线程更新缓存事务提交了，结果导致读取到**version**版本号与库存有问题

```java
// 使用缓存读取库存，减轻DB压力
Integer count = Integer.parseInt(JedisUtil.get(Constant.PREFIX_COUNT + id));
Integer sale = Integer.parseInt(JedisUtil.get(Constant.PREFIX_SALE + id));
Integer version = Integer.parseInt(JedisUtil.get(Constant.PREFIX_VERSION + id));
```

日志打出来是这样的，可以想象到那个卡点在哪了，就是第一个线程和第二个线程同时读取缓存**count**时，都读取到**10**，然后第二个线程暂停了，第一个线程继续执行到已经秒杀完成，更新缓存，现在第二个线程才恢复继续执行，结果读取缓存**version**版本号就加一了，所以变成了**10 0 1**

```java
logger.info("版本号:{} {} {}", stockDto.getCount(), stockDto.getSale(), stockDto.getVersion());
2019-11-22 20:42:17.874  INFO --- [nio-8080-exec-2] : 版本号:10 0 0
2019-11-22 20:42:17.910  INFO --- [io-8080-exec-10] : 版本号:10 0 1
2019-11-22 20:42:17.964  INFO --- [io-8080-exec-26] : 版本号:10 0 2
2019-11-22 20:42:18.010  INFO --- [io-8080-exec-14] : 版本号:10 1 3
2019-11-22 20:42:18.033  INFO --- [io-8080-exec-15] : 版本号:10 1 4
2019-11-22 20:42:18.085  INFO --- [io-8080-exec-20] : 版本号:10 2 5
2019-11-22 20:42:18.108  INFO --- [io-8080-exec-23] : 版本号:9 3 6
2019-11-22 20:42:18.145  INFO --- [io-8080-exec-19] : 版本号:8 5 7
2019-11-22 20:42:18.169  INFO --- [io-8080-exec-17] : 版本号:8 5 8
2019-11-22 20:42:18.198  INFO --- [io-8080-exec-60] : 版本号:7 5 9
2019-11-22 20:42:18.236  INFO --- [io-8080-exec-39] : 版本号:6 7 10
2019-11-22 20:42:18.282  INFO --- [io-8080-exec-40] : 版本号:5 8 11
2019-11-22 20:42:18.311  INFO --- [io-8080-exec-48] : 版本号:4 10 12
2019-11-22 20:42:18.336  INFO --- [io-8080-exec-51] : 版本号:3 10 13
2019-11-22 20:42:18.372  INFO --- [io-8080-exec-55] : 版本号:2 11 14
2019-11-22 20:42:18.396  INFO --- [io-8080-exec-52] : 版本号:1 12 15
```

### 2.2. 如何解决

#### 2.2.1. 乐观锁扣库存时加上库存大于0的判断，AND count > 0

* **StockDao**

```java {12}
/**
 * 乐观锁更新扣减库存
 *
 * @param stockDto
 * @return int
 * @throws
 * @author wliduo[i@dolyw.com]
 * @date 2019/11/22 14:14
 */
@Update("UPDATE t_seckill_stock SET count = count - 1, sale = sale + 1, version = version + 1 " +
        "WHERE id = #{id, jdbcType = INTEGER} AND version = #{version, jdbcType = INTEGER} " +
        "AND count > 0")
int updateByOptimisticLock(StockDto stockDto);
```


#### 2.2.2. 给这块读取代码加上Redis事务(乐观锁)或者分布式锁(悲观锁)

```java
// 使用缓存读取库存，减轻DB压力
Integer count = Integer.parseInt(JedisUtil.get(Constant.PREFIX_COUNT + id));
Integer sale = Integer.parseInt(JedisUtil.get(Constant.PREFIX_SALE + id));
Integer version = Integer.parseInt(JedisUtil.get(Constant.PREFIX_VERSION + id));
```

#### 2.2.3. 使用Redis批量操作(mget和mset)

**mget**和**mset**可以批量获取和设置**Redis**键值，具有原子性，所以采用这种方式

### 2.3. 正确实现

* **ISeckillEvolutionService**

```java
/**
 * 乐观锁加缓存方法(名称注入)，线程安全
 */
@Autowired
@Qualifier("seckillOptimisticLockRedisSafeService")
private ISeckillService seckillOptimisticLockRedisSafeService;

@Override
@Transactional(rollbackFor = Exception.class)
public Integer createOptimisticLockOrderWithRedis(Integer id) throws Exception {
    // 检查库存
    StockDto stockDto = seckillOptimisticLockRedisSafeService.checkStock(id);
    Thread.sleep(10);
    // 扣库存
    Integer saleCount = seckillOptimisticLockRedisSafeService.saleStock(stockDto);
    if (saleCount <= 0) {
        throw new CustomException("扣库存失败");
    }
    Thread.sleep(10);
    // 下订单
    Integer orderCount = seckillOptimisticLockRedisSafeService.createOrder(stockDto);
    if (saleCount <= 0) {
        throw new CustomException("下订单失败");
    }
    return orderCount;
}
```

* **SeckillOptimisticLockRedisSafeServiceImpl**

```java
package com.example.seckill.impl;


import com.example.constant.Constant;
import com.example.dao.StockDao;
import com.example.dao.StockOrderDao;
import com.example.dto.custom.StockDto;
import com.example.dto.custom.StockOrderDto;
import com.example.exception.CustomException;
import com.example.seckill.ISeckillService;
import com.example.util.JedisUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.Transaction;

import java.util.List;

/**
 * 使用乐观锁加缓存的方式(线程安全)(使用Redis批量操作mget和mset具有原子性)
 *
 * @author wliduo[i@dolyw.com]
 * @date 2019-11-20 18:03:33
 */
@Service("seckillOptimisticLockRedisSafeService")
public class SeckillOptimisticLockRedisSafeServiceImpl implements ISeckillService {

    /**
     * logger
     */
    private static final Logger logger = LoggerFactory.getLogger(SeckillOptimisticLockRedisSafeServiceImpl.class);

    @Autowired
    private StockDao stockDao;

    @Autowired
    private StockOrderDao stockOrderDao;

    @Override
    public StockDto checkStock(Integer id) throws Exception {
        // 使用缓存读取库存，减轻DB压力，Redis批量操作(具有原子性)解决线程安全问题
        List<String> dataList = JedisUtil.mget(Constant.PREFIX_COUNT + id,
                Constant.PREFIX_SALE + id, Constant.PREFIX_VERSION + id);
        Integer count = Integer.parseInt(dataList.get(0));
        Integer sale = Integer.parseInt(dataList.get(1));
        Integer version = Integer.parseInt(dataList.get(2));
        if (count > 0) {
            // 还有库存
            StockDto stockDto = new StockDto();
            stockDto.setId(id);
            stockDto.setCount(count);
            stockDto.setSale(sale);
            stockDto.setVersion(version);
            Thread.sleep(10);
            return stockDto;
        }
        throw new CustomException("库存不足");
    }

    @Override
    public Integer saleStock(StockDto stockDto) throws Exception {
        Integer saleCount = stockDao.updateByOptimisticLock(stockDto);
        // 操作数据大于0，说明扣库存成功
        if (saleCount > 0) {
            logger.info("版本号:{} {} {}", stockDto.getCount(), stockDto.getSale(), stockDto.getVersion());
            Thread.sleep(10);
            // 更新缓存，这里更新需要保证三个数据(库存，已售，乐观锁版本号)的一致性，使用mset原子操作
            updateCache(stockDto);
        }
        return saleCount;
    }

    /**
     * 这里遵循先更新数据库，再更新缓存，详细的数据库与缓存一致性解析可以查看
     * https://note.dolyw.com/cache/00-DataBaseConsistency.html
     *
     * @param stockDto
     * @return java.lang.Integer
     * @throws
     * @author wliduo[i@dolyw.com]
     * @date 2019/11/22 16:25
     */
    public void updateCache(StockDto stockDto) {
        Integer count = stockDto.getCount() - 1;
        Integer sale = stockDto.getSale() + 1;
        Integer version = stockDto.getVersion() + 1;
        JedisUtil.mset(Constant.PREFIX_COUNT + stockDto.getId(), count.toString(),
                Constant.PREFIX_SALE + stockDto.getId(), sale.toString(),
                Constant.PREFIX_VERSION + stockDto.getId(), version.toString());
    }

    @Override
    public Integer createOrder(StockDto stockDto) {
        StockOrderDto stockOrderDto = new StockOrderDto();
        stockOrderDto.setStockId(stockDto.getId());
        return stockOrderDao.insertSelective(stockOrderDto);
    }

}
```

## 3 开始测试

使用**JMeter**测试上面的代码，**JMeter**的使用可以查看: [JMeter的安装使用](http://note.dolyw.com/command/06-JMeter-Install.html)

我们调用一下商品库存初始化的方法，我使用的是**PostMan**，初始化库存表商品**50**个库存，而且清空订单表

![图片](https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2019/11/20191122001.png)

接着使用**PostMan**调用缓存预热方法

![图片](https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2019/11/20191122013.png)

这时候可以看到我们的数据，库存为**50**，卖出为**0**，订单表为空

![图片](https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2019/11/20191122002.png)

缓存数据也是这样

![图片](https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2019/11/20191122014.png)

打开**JMeter**，添加测试计划，模拟**1000**个并发线程测试秒杀**50**个库存的商品，填写请求地址，点击启动图标开始

![图片](https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2019/11/20191122015.png)

![图片](https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2019/11/20191122016.png)

可以看到**1000**个并发线程执行完，最后



