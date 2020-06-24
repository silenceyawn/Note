(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{448:function(t,_,a){"use strict";a.r(_);var v=a(11),e=Object(v.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mysql的那些锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql的那些锁"}},[t._v("#")]),t._v(" MySQL的那些锁")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2019/12/20191202001.jpg",alt:"图片"}})]),t._v(" "),a("h2",{attrs:{id:"_1-为什么要引入锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-为什么要引入锁"}},[t._v("#")]),t._v(" 1. 为什么要引入锁")]),t._v(" "),a("p",[t._v("锁是计算机协调多个进程或线程并发访问某一资源的机制，对于并发事务下，锁可以保证数据的正确和唯一性")]),t._v(" "),a("p",[t._v("数据库锁定机制简单来说，就是数据库为了保证数据的一致性，而使各种共享资源在被并发访问变得有序所设计的一种规则。对于任何一种数据库来说都需要有相应的锁定机制，所以 MySQL 自然也不能例外。MySQL 数据库由于其自身架构的特点，存在多种数据存储引擎，每种存储引擎所针对的应用场景特点都不太一样，为了满足各自特定应用场景的需求，每种存储引擎的锁定机制都是为各自所面对的特定场景而优化设计，所以各存储引擎的锁定机制也有较大区别")]),t._v(" "),a("p",[a("strong",[t._v("推荐阅读")])]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/database/00-Isolation.html"}},[t._v("数据库的ACID")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/database/00-Isolation.html#隔离性-isolation"}},[t._v("事务隔离级别")])],1)]),t._v(" "),a("h2",{attrs:{id:"_2-按使用方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-按使用方式"}},[t._v("#")]),t._v(" 2. 按使用方式")]),t._v(" "),a("p",[t._v("从我们 IT 民工的角度看是分为"),a("strong",[t._v("乐观锁和悲观锁")])]),t._v(" "),a("h3",{attrs:{id:"_2-1-悲观锁-pcc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-悲观锁-pcc"}},[t._v("#")]),t._v(" 2.1. 悲观锁(PCC)")]),t._v(" "),a("p",[a("strong",[t._v("悲观锁(Pessimistic Concurrency Control，PCC)是悲观的认为每次都会发生并发冲突")]),t._v("，屏蔽一切可能违反数据完整性的操作，在可能出现并发的地方加上锁机制，按串行化一一执行")]),t._v(" "),a("p",[t._v("通俗解释是指"),a("strong",[t._v("总是假设最坏的情况，每次去拿数据的时候都认为别人会修改，所以每次在拿数据的时候都会上锁，这样别人想拿这个数据就会阻塞直到它拿到锁(共享资源每次只给一个线程使用，其它线程阻塞，用完后再把资源转让给其它线程)")]),t._v("。传统的关系型数据库里边就用到了很多这种锁机制，比如行锁，表锁，读锁，写锁等，都是在做操作之前先上锁，还有 Java 中 synchronized 和 ReentrantLock 等独占锁就是悲观锁思想的实现")]),t._v(" "),a("h3",{attrs:{id:"_2-2-乐观锁-occ"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-乐观锁-occ"}},[t._v("#")]),t._v(" 2.2. 乐观锁(OCC)")]),t._v(" "),a("p",[a("strong",[t._v("乐观锁(Optimistic Concurrency Control，OCC)是乐观的认为每次都不会发生并发冲突")]),t._v("，只在提交操作时检查是否违反数据完整性，一般是最后提交时用版本做对比，查看是否数据完整才允许提交成功")]),t._v(" "),a("p",[t._v("通俗解释是指"),a("strong",[t._v("总是假设最好的情况，每次去拿数据的时候都认为别人不会修改，所以不会上锁，但是在更新的时候会判断一下在此期间别人有没有去更新这个数据，可以使用版本号机制和 CAS 算法实现")]),t._v("。像数据库提供的类似于 write_condition 机制，其实都是提供的乐观锁，还在 Java 中 java.util.concurrent.atomic 包下面的原子变量类就是使用了乐观锁的一种实现方式 CAS 实现的")]),t._v(" "),a("h3",{attrs:{id:"_2-3-场景对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-场景对比"}},[t._v("#")]),t._v(" 2.3. 场景对比")]),t._v(" "),a("p",[a("strong",[t._v("乐观锁适用于写比较少的情况下(多读场景)")]),t._v("，即冲突真的很少发生的时候，这样可以省去了锁的开销，加大了系统的整个吞吐量")]),t._v(" "),a("p",[a("strong",[t._v("悲观锁适用于读比较少的情况下(多写场景)")]),t._v("，如果是多写的情况，一般会经常产生冲突，这就会导致上层应用会不断的进行 retry，这样反倒是降低了性能")]),t._v(" "),a("h2",{attrs:{id:"_3-按粒度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-按粒度"}},[t._v("#")]),t._v(" 3. 按粒度")]),t._v(" "),a("p",[t._v("从数据库系统的角度来看 MySQL 各存储引擎使用了三种类型(级别)的锁定机制")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("表级锁(MyISAM)")]),t._v(": 开销小，加锁快；不会出现死锁；锁定粒度大，发生锁冲突的概率最高，并发度最低")]),t._v(" "),a("li",[a("strong",[t._v("行级锁(InnoDB)")]),t._v(": 开销大，加锁慢；会出现死锁；锁定粒度最小，发生锁冲突的概率最低，并发度也最高")]),t._v(" "),a("li",[a("strong",[t._v("页级锁(BDB)")]),t._v(": 开销和加锁时间界于表锁和行锁之间；会出现死锁；锁定粒度界于表锁和行锁之间，并发度一般")])]),t._v(" "),a("p",[a("strong",[t._v("InnoDB 支持表锁和行锁，MyISAM 只支持表锁，而页级锁使用很少，这里不展开说明了")])]),t._v(" "),a("h2",{attrs:{id:"_3-1-表级锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-表级锁"}},[t._v("#")]),t._v(" 3.1. 表级锁")]),t._v(" "),a("p",[t._v("由于 MyISAM 存储引擎使用的锁定机制完全是由 MySQL 提供的表级锁定实现，所以下面我们将以 MyISAM 存储引擎作为示例存储引擎，MySQL 的表级锁有两种模式")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("表共享读锁(Table Read Lock)")])]),t._v(" "),a("li",[a("strong",[t._v("表独占写锁(Table Write Lock)")])])]),t._v(" "),a("p",[t._v("锁模式的兼容性是这样的")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("对 MyISAM 表的读操作，不会阻塞其他用户对同一表的读请求，但会阻塞对同一表的写请求")])]),t._v(" "),a("li",[a("strong",[t._v("对 MyISAM 表的写操作，则会阻塞其他用户对同一表的读和写操作")])])]),t._v(" "),a("p",[t._v("MyISAM 在执行查询语句(SELECT)前，会自动给涉及的所有表加读锁，在执行更新操作(UPDATE、DELETE、INSERT)前，会自动给涉及的表加写锁，这个过程并不需要用户干预，因此，用户一般不需要直接用 LOCK TABLE 命令给 MyISAM 表显式加锁")]),t._v(" "),a("p",[a("strong",[t._v("在 MyISAM 存储引擎中，当执行 SQL 语句的时候是自动加表锁的，在 InnoDB 存储引擎中，如果没有使用索引，表锁也是自动加的")])]),t._v(" "),a("p",[t._v("现在使用的都是 InnoDB 了，简单了解下 MyISAM，对于其表锁优化的知识，这里不展开复述了，有兴趣自行查询资料")]),t._v(" "),a("h2",{attrs:{id:"_3-2-行级锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-行级锁"}},[t._v("#")]),t._v(" 3.2. 行级锁")]),t._v(" "),a("p",[t._v("行级锁不是 MySQL 自己实现的锁定方式，而是由其他存储引擎自己所实现的，如广为大家所知的 InnoDB 存储引擎。考虑到行级锁定均由各个存储引擎自行实现，而且具体实现也各有差别，而 InnoDB 是目前事务型存储引擎中使用最为广泛的存储引擎，所以这里我们就主要分析一下 InnoDB 的锁定特性")]),t._v(" "),a("h3",{attrs:{id:"_3-2-1-锁类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-锁类型"}},[t._v("#")]),t._v(" 3.2.1. 锁类型")]),t._v(" "),a("p",[t._v("总的来说，InnoDB 的锁定机制和 Oracle 数据库有不少相似之处。InnoDB 的行级锁定同样分为两种类型")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("共享锁(S): 又叫读锁，其他事务可以继续加共享锁，但是不能继续加排他锁")])]),t._v(" "),a("li",[a("strong",[t._v("排他锁(X): 又叫写锁，一旦加了排他锁之后，其他事务就不能加锁了")])])]),t._v(" "),a("h3",{attrs:{id:"_3-2-2-意向锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-意向锁"}},[t._v("#")]),t._v(" 3.2.2. 意向锁")]),t._v(" "),a("p",[t._v("而在锁定机制的实现过程中为了让行级锁定和表级锁定共存，InnoDB 也同样使用了意向锁(表级锁定)的概念，也就有了意向共享锁和意向排他锁这两种")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("意向共享锁(IS): 表达一个事务想要获取一张表中某几行的共享锁")])]),t._v(" "),a("li",[a("strong",[t._v("意向排他锁(IX): 表达一个事务想要获取一张表中某几行的排他锁")])])]),t._v(" "),a("p",[t._v("这个锁有什么用呢，为什么需要这个锁呢")]),t._v(" "),a("p",[t._v("首先说一下如果没有这个锁，要给这个表加上表锁，一般的做法是去遍历每一行看看它是否有行锁，这样的话效率太低，而我们有意向锁，只需要判断是否有意向锁即可，不需要再去一行行的去扫描")]),t._v(" "),a("h3",{attrs:{id:"_3-2-3-锁类型总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3-锁类型总结"}},[t._v("#")]),t._v(" 3.2.3. 锁类型总结")]),t._v(" "),a("p",[t._v("当一个事务需要给自己需要的某个资源加锁的时候，如果遇到一个共享锁正锁定着自己需要的资源的时候，自己可以再加一个共享锁，不过不能加排他锁。但是，如果遇到自己需要锁定的资源已经被一个排他锁占有之后，则只能等待该锁定释放资源之后自己才能获取锁定资源并添加自己的锁定。而意向锁的作用就是当一个事务在需要获取资源锁定的时候，如果遇到自己需要的资源已经被排他锁占用的时候，该事务可以需要锁定行的表上面添加一个合适的意向锁。如果自己需要一个共享锁，那么就在表上面添加一个意向共享锁。而如果自己需要的是某行(或者某些行)上面添加一个排他锁的话，则先在表上面添加一个意向排他锁。意向共享锁可以同时并存多个，但是意向排他锁同时只能有一个存在")]),t._v(" "),a("p",[t._v("所以，可以说 InnoDB 的锁定模式实际上可以分为四种: "),a("strong",[t._v("共享锁(S)，排他锁(X)，意向共享锁(IS)和意向排他锁(IX)")])]),t._v(" "),a("p",[t._v("我们可以通过以下表格来总结上面这四种所的共存逻辑关系")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}}),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("共享锁(S)")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("排他锁(X)")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("意向共享锁(IS)")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("意向排他锁(IX)")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("共享锁(S)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("兼容")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("冲突")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("兼容")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("冲突")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("排他锁(X)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("冲突")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("冲突")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("冲突")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("冲突")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("意向共享锁(IS)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("兼容")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("冲突")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("兼容")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("兼容")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("意向排他锁(IX)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("冲突")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("冲突")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("兼容")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("兼容")])])])]),t._v(" "),a("p",[t._v("如果一个事务请求的锁模式与当前的锁兼容，InnoDB 就将请求的锁授予该事务，反之，如果两者不兼容，该事务就要等待锁释放")]),t._v(" "),a("p",[t._v("意向锁是 InnoDB 自动加的，不需用户干预。对于 UPDATE、DELETE 和 INSERT 语句，InnoDB 会自动给涉及数据集加排他锁(X)，对于普通 SELECT 语句，InnoDB 不会加任何锁，事务可以通过以下语句显示给记录集加共享锁或排他锁")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 共享锁(S)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" table_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LOCK")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SHARE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("MODE")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 排他锁(X)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" table_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FOR")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v("\n")])])]),a("p",[t._v("用 "),a("code",[t._v("SELECT ... LOCK IN SHARE MODE")]),t._v(" 获得共享锁(S)，主要用在需要数据依存关系时来确认某行记录是否存在，并确保没有人对这个记录进行 UPDATE 或者 DELETE 操作")]),t._v(" "),a("p",[t._v("但是如果当前事务也需要对该记录进行更新操作，则很有可能造成死锁，对于锁定行记录后需要进行更新操作的应用，应该使用 "),a("code",[t._v("SELECT... FOR UPDATE")]),t._v(" 方式获得排他锁(X)")]),t._v(" "),a("h3",{attrs:{id:"_3-2-4-行锁实现方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-4-行锁实现方式"}},[t._v("#")]),t._v(" 3.2.4. 行锁实现方式")]),t._v(" "),a("p",[a("strong",[t._v("InnoDB 行锁是通过给索引上的索引项加锁来实现的，只有通过索引条件检索数据，InnoDB 才使用行级锁，否则，InnoDB 将使用表锁")])]),t._v(" "),a("p",[t._v("在实际应用中，要特别注意InnoDB行锁的这一特性，不然的话，可能导致大量的锁冲突，从而影响并发性能，下面通过一些实际例子来加以说明")]),t._v(" "),a("ol",[a("li",[t._v("在不通过索引条件查询的时候，InnoDB 确实使用的是表锁，而不是行锁")]),t._v(" "),a("li",[t._v("由于 MySQL 的行锁是针对索引加的锁，不是针对记录加的锁，所以虽然是访问不同行的记录，但是如果是使用相同的索引键，是会出现锁冲突的。")]),t._v(" "),a("li",[t._v("当表有多个索引的时候，不同的事务可以使用不同的索引锁定不同的行，另外，不论是使用主键索引、唯一索引或普通索引，InnoDB 都会使用行锁来对数据加锁")]),t._v(" "),a("li",[t._v("即便在条件中使用了索引字段，但是否使用索引来检索数据是由 MySQL 通过判断不同执行计划的代价来决定的，如果 MySQL 认为全表扫描效率更高，比如对一些很小的表，它就不会使用索引，这种情况下 InnoDB 将使用表锁，而不是行锁。因此，在分析锁冲突时，别忘了检查 SQL 的执行计划，以确认是否真正使用了索引")])]),t._v(" "),a("h3",{attrs:{id:"_3-2-5-自增长锁-补充"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-5-自增长锁-补充"}},[t._v("#")]),t._v(" 3.2.5. 自增长锁(补充)")]),t._v(" "),a("p",[t._v("自增长锁是一种特殊的表锁机制，如果表中存在自增字段，MySQL 便会自动维护一个自增锁，提升并发插入性能，对于这个锁有几个特点")]),t._v(" "),a("ul",[a("li",[t._v("在 SQL 执行完就释放锁，并不是事务执行完")]),t._v(" "),a("li",[t._v("对于 INSERT...SELECT 大数据量插入会影响插入性能，因为会阻塞另外一个事务执行")]),t._v(" "),a("li",[t._v("自增算法可以配置")])]),t._v(" "),a("p",[t._v("在 MySQL 5.1.2 版本之后，有了很多优化，可以根据不同的模式来调整自增加锁的方式，我这里的版本是 5.7.16，输入 "),a("code",[t._v("show variables like 'innodb_autoinc_lock_mode'")]),t._v(" 即可查看当前模式")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2019/12/20191202002.png",alt:"图片"}})]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" show variables like "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'innodb_autoinc_lock_mode'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n+--------------------------+-------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Variable_name            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n+--------------------------+-------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" innodb_autoinc_lock_mode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n+--------------------------+-------+\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" row "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" set, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" warning "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.00")]),t._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("在 MySQL 中 innodbautoinclock_mode 有 3 种配置模式 0、1、2，分别对应")]),t._v(" "),a("ul",[a("li",[t._v("传统模式(0): 也就是我们最上面的使用表锁")]),t._v(" "),a("li",[t._v("连续模式(1): 对于插入的时候可以确定行数的使用互斥量，对于不能确定行数的使用表锁的模式")]),t._v(" "),a("li",[t._v("交错模式(2): 所有的都使用互斥量，为什么叫交错模式呢，有可能在批量插入时自增值不是连续的，当然一般来说如果不看重自增值连续一般选择这个模式，性能是最好的")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2019/12/20191202003.jpg",alt:"图片"}})]),t._v(" "),a("p",[t._v("InnoDB 存储引擎中自增长的实现和 MyISAM 不同。MyISAM 存储引擎是表锁设计，自增长不用考虑并发插入的问题。在 InnoDB 存储引擎中，自增长值的列必须是索引，同时必须是索引的第一个列，如果不是第一个列，则 MySQL 会抛出异常。MyISAM 存储引擎没有这个问题")]),t._v(" "),a("h2",{attrs:{id:"_4-innodb锁算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-innodb锁算法"}},[t._v("#")]),t._v(" 4. InnoDB锁算法")]),t._v(" "),a("h3",{attrs:{id:"_4-1-记录锁-record-lock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-记录锁-record-lock"}},[t._v("#")]),t._v(" 4.1. 记录锁(Record Lock)")]),t._v(" "),a("p",[a("strong",[t._v("记录锁是锁住记录的，仅锁定一行记录(如共享锁、排他锁)，这里要说明的是这里锁住的是索引记录，而不是我们真正的数据记录")])]),t._v(" "),a("ul",[a("li",[t._v("如果锁的是非主键索引，会在自己的索引上面加锁之后然后再去主键上面加锁锁住")]),t._v(" "),a("li",[t._v("如果没有表上没有索引(包括没有主键)，则会使用隐式(隐藏)的主键索引进行加锁")]),t._v(" "),a("li",[t._v("如果要锁的列没有索引，则会进行全表记录加锁")]),t._v(" "),a("li",[t._v("查询条件的列是唯一索引的情况下，临键锁退化为记录锁")])]),t._v(" "),a("h3",{attrs:{id:"_4-2-间隙锁-gap-lock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-间隙锁-gap-lock"}},[t._v("#")]),t._v(" 4.2. 间隙锁(GAP Lock)")]),t._v(" "),a("p",[a("strong",[t._v("间隙锁顾名思义锁间隙(GAP Lock，锁定一个范围，但不包含记录本身)，不锁记录。锁间隙的意思就是锁定某一个范围，间隙锁又叫 GAP 锁，其不会阻塞其他的 GAP 锁，但是会阻塞插入间隙锁，这也是用来防止幻读的关键")])]),t._v(" "),a("p",[t._v("关闭间隙锁的 2 种方式")]),t._v(" "),a("ol",[a("li",[t._v("将事务隔离级别变为 Read Committed(提交读)")]),t._v(" "),a("li",[t._v("将参数 "),a("code",[t._v("innodb_locks_unsafe_for_binlog")]),t._v(" 设置为 1")])]),t._v(" "),a("p",[t._v("在上述配置下，除了外键和唯一性检查依然需要间隙锁，其余情况仅适用行锁进行锁定")]),t._v(" "),a("h3",{attrs:{id:"_4-3-临键锁-next-key-lock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-临键锁-next-key-lock"}},[t._v("#")]),t._v(" 4.3. 临键锁(Next-Key Lock)")]),t._v(" "),a("p",[a("strong",[t._v("Next-Key Lock，等于记录锁(Record Lock) + 间隙锁(GAP Lock)，锁定一个范围，并且锁定记录本身。主要是阻止多个事务将记录插入到同一个范围内，从而避免幻读")])]),t._v(" "),a("p",[t._v("在 RR 隔离级别下(InnoDB 默认)，InnoDB 对于行的扫描锁定都是使用此算法，但是如果查询扫描中有唯一索引会退化成只使用记录锁。")]),t._v(" "),a("p",[t._v("为什么呢，因为唯一索引能确定行数，而其他索引不能确定行数，有可能在其他事务中会再次添加这个索引的数据造成幻读，这里也说明了为什么 MySQL 可以在 RR 级别下解决幻读")]),t._v(" "),a("h3",{attrs:{id:"_4-4-插入意向锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-插入意向锁"}},[t._v("#")]),t._v(" 4.4. 插入意向锁")]),t._v(" "),a("p",[a("strong",[t._v("对已有数据行的修改与删除，必须加强互斥锁 X 锁，那对于数据的插入，是否还需要加这么强的锁，来实施互斥呢？插入意向锁，孕育而生")])]),t._v(" "),a("p",[t._v("插入意向锁，是间隙锁(Gap Lock)的一种(所以，也是实施在索引上的)，它是专门针对 INSERT 操作的")]),t._v(" "),a("p",[a("strong",[t._v("可以看出插入意向锁是在插入的时候产生的，在多个事务同时写入不同数据至同一索引间隙的时候，并不需要等待其他事务完成，不会发生锁等待(多个事务，在同一个索引，同一个范围区间插入记录时，如果插入的位置不冲突，不会阻塞彼此)")])]),t._v(" "),a("p",[t._v("假设有一个记录索引包含键值 4 和 7，不同的事务分别插入 5 和 6，每个事务都会产生一个加在 4-7 之间的插入意向锁，获取在插入行上的排它锁，但是不会被互相锁住，因为数据行并不冲突")]),t._v(" "),a("p",[t._v("这里要说明的是如果有间隙锁了，插入意向锁会被阻塞")]),t._v(" "),a("h3",{attrs:{id:"_4-5-多版本并发控制-mvcc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-多版本并发控制-mvcc"}},[t._v("#")]),t._v(" 4.5. 多版本并发控制(MVCC)")]),t._v(" "),a("p",[t._v("MVCC(Multi-Version Concurrency Control)，多版本并发控制。在 InnoDB 中，"),a("strong",[t._v("在每一行记录的后面增加两个隐藏列，记录创建版本号和删除版本号。通过版本号和行锁，从而提高数据库系统并发性能")]),t._v("，在 MVCC 中，对于读操作可以分为两种读")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("快照读")]),t._v("：读取的历史数据，简单的 SELECT 语句，不加锁，MVCC 实现可重复读，使用的是 MVCC 机制读取 undo 中的已经提交的数据。所以它的读取是非阻塞的")]),t._v(" "),a("li",[a("strong",[t._v("当前读")]),t._v("：需要加锁的语句，UPDATE，INSERT，DELETE，SELECT...FOR UPDATE 等等都是当前读")])]),t._v(" "),a("p",[t._v("在 RR 隔离级别下的快照读，不是以 begin 事务开始的时间点作为 snapshot 建立时间点，而是以第一条 SELECT 语句的时间点作为 snapshot 建立的时间点。以后的 SELECT 都会读取当前时间点的快照值")]),t._v(" "),a("p",[t._v("在 RC 隔离级别下每次快照读均会创建新的快照")]),t._v(" "),a("p",[t._v("具体的原理是通过每行会有两个隐藏的字段一个是用来记录当前事务，一个是用来记录回滚的指向 Undolog。利用 Undolog 就可以读取到之前的快照，不需要单独开辟空间记录")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("优点")]),t._v(": MVCC 在大多数情况下代替了行锁，实现了对读的非阻塞，读不加锁，读写不冲突")]),t._v(" "),a("li",[a("strong",[t._v("缺点")]),t._v(": 每行记录都需要额外的存储空间，需要做更多的行维护和检查工作。注意写写不能并行")])]),t._v(" "),a("h2",{attrs:{id:"_5-锁协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-锁协议"}},[t._v("#")]),t._v(" 5. 锁协议")]),t._v(" "),a("h3",{attrs:{id:"_5-1-一次封锁协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-一次封锁协议"}},[t._v("#")]),t._v(" 5.1. 一次封锁协议")]),t._v(" "),a("p",[t._v("因为有大量的并发访问，为了预防死锁，一般应用中推荐使用一次封锁法，就是在方法的开始阶段，已经预先知道会用到哪些数据，然后全部锁住，在方法运行之后，再全部解锁。这种方式可以有效的避免循环死锁，但在数据库中却不适用，因为在事务开始阶段，数据库并不知道会用到哪些数据")]),t._v(" "),a("h3",{attrs:{id:"_5-2-两段锁协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-两段锁协议"}},[t._v("#")]),t._v(" 5.2. 两段锁协议")]),t._v(" "),a("p",[t._v("将事务分成两个阶段，加锁阶段和解锁阶段(所以叫两段锁)")]),t._v(" "),a("ul",[a("li",[t._v("加锁阶段: 在该阶段可以进行加锁操作。在对任何数据进行读操作之前要申请并获得 S 锁(共享锁，其它事务可以继续加共享锁，但不能加排它锁)，在进行写操作之前要申请并获得 X 锁(排它锁(只有当前数据无共享锁，无排它锁之后才能获得)，其它事务不能再获得任何锁)。加锁不成功，则事务进入等待状态，直到加锁成功才继续执行")]),t._v(" "),a("li",[t._v("解锁阶段：当事务释放了一个封锁以后，事务进入解锁阶段，在该阶段只能进行解锁操作不能再进行加锁操作。事务提交时(commit)和事务回滚时(rollback)会自动的同时释放该事务所加的 INSERT、UPDATE、DELETE 对应的锁")])]),t._v(" "),a("p",[t._v("这种方式虽然无法避免死锁，但是两段锁协议可以保证事务的并发调度是串行化(串行化很重要，尤其是在数据恢复和备份的时候)的")]),t._v(" "),a("h3",{attrs:{id:"_5-2-三级封锁协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-三级封锁协议"}},[t._v("#")]),t._v(" 5.2. 三级封锁协议")]),t._v(" "),a("ul",[a("li",[t._v("一级封锁协议: 事务 T 中如果对数据 R 有写操作，必须在这个事务中对 R 的第一次读操作前对它加 X 锁，直到事务结束才释放。事务结束包括正常结束(commit)和非正常结束(rollback)")]),t._v(" "),a("li",[t._v("二级封锁协议: 一级封锁协议加上事务 T 在读取数据 R 之前必须先对其加 S 锁，读完后方可释放 S 锁。")]),t._v(" "),a("li",[t._v("三级封锁协议: 一级封锁协议加上事务 T 在读取数据 R 之前必须先对其加 S 锁，直到事务结束才释放")])]),t._v(" "),a("p",[t._v("可见，三级锁操作一个比一个厉害(满足高级锁则一定满足低级锁)。但有个非常致命的地方，一级锁协议就要在第一次读加 X 锁，直到事务结束。几乎就要在整个事务加写锁了，效率非常低。三级封锁协议只是一个理论上的东西，实际数据库常用另一套方法来解决事务并发问题")]),t._v(" "),a("h2",{attrs:{id:"_6-死锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-死锁"}},[t._v("#")]),t._v(" 6. 死锁")]),t._v(" "),a("p",[a("strong",[t._v("死锁是指两个事务或者多个事务在同一资源上相互占用，并请求对方所占用的资源，从而造成恶性循环的现象(因争夺资源而造成的一种互相等待的现象)")])]),t._v(" "),a("h3",{attrs:{id:"_6-1-出现死锁的原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-出现死锁的原因"}},[t._v("#")]),t._v(" 6.1. 出现死锁的原因")]),t._v(" "),a("ul",[a("li",[t._v("系统资源不足")]),t._v(" "),a("li",[t._v("进程运行推进的顺序不当")]),t._v(" "),a("li",[t._v("资源分配不当")])]),t._v(" "),a("p",[a("strong",[t._v("产生死锁的四个必要条件")])]),t._v(" "),a("ol",[a("li",[t._v("互斥条件: 一个资源只能被一个进程使用")]),t._v(" "),a("li",[t._v("请求和保持条件: 进行获得一定资源，又对其他资源发起了请求，但是其他资源被其他线程占用，请求阻塞，但是也不会释放自己占用的资源")]),t._v(" "),a("li",[t._v("不可剥夺条件: 指进程所获得的资源，不可能被其他进程剥夺，只能自己释放")]),t._v(" "),a("li",[t._v("环路等待条件: 进程发生死锁，必然存在着进程-资源之间的环形链")])]),t._v(" "),a("h3",{attrs:{id:"_6-2-如何解决死锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-如何解决死锁"}},[t._v("#")]),t._v(" 6.2. 如何解决死锁")]),t._v(" "),a("p",[a("strong",[t._v("MyISAM 表锁是 deadlock free 的，这是因为 MyISAM 总是一次性获得所需的全部锁，要么全部满足要么等待，因此不会出现死锁。但是在  InnoDB 中，除单个 SQL 组成的事务外，锁是逐步获得的，这就决定了 InnoDB 发生死锁是可能的")])]),t._v(" "),a("p",[t._v("发生死锁后，InnoDB 一般都能自动检测到，并使一个事务释放锁并退回，另一个事务获得锁，继续完成事务。如果出现死锁，可以用 "),a("code",[t._v("SHOW INNODB STATUS")]),t._v(" 命令来确定最后一个死锁产生的原因和改进措施")]),t._v(" "),a("p",[t._v("但在涉及外部锁，或涉及锁的情况下，InnoDB 并不能完全自动检测到死锁，这需要通过设置锁等待超时参数 "),a("code",[t._v("innodb_lock_wait_timeout")]),t._v(" 来解决(即当两个事务互相等待时，当一个等待时间超过设置的阈值时，其中一个事务进行回滚，另外一个等待的事务就能继续执行)。需要说明的是，这个参数并不是只用来解决死锁问题，在并发访问比较高的情况下，如果大量事务因无法立即获取所需的锁而挂起，会占用大量计算机资源，造成严重性能问题，甚至拖垮数据库。我们通过设置合适的锁等待超时阈值，可以避免这种情况发生")]),t._v(" "),a("h3",{attrs:{id:"_6-3-如何防止死锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-如何防止死锁"}},[t._v("#")]),t._v(" 6.3. 如何防止死锁")]),t._v(" "),a("p",[t._v("通常来说，死锁都是应用设计的问题，通过调整业务流程、数据库对象设计、事务大小、以及访问数据库的 SQL 语句，绝大部分都可以避免。下面就通过实例来介绍几种死锁的常用方法")]),t._v(" "),a("ul",[a("li",[t._v("在应用中，如果不同的程序会并发存取多个表，应尽量约定以相同的顺序为访问表，这样可以大大降低产生死锁的机会(以固定的顺序访问表和行，交叉访问更容易造成事务等待回路)")]),t._v(" "),a("li",[t._v("在程序以批量方式处理数据的时候，如果事先对数据排序，保证每个线程按固定的顺序来处理记录，也可以大大降低死锁的可能")]),t._v(" "),a("li",[t._v("尽量避免大事务，占有的资源锁越多，越容易出现死锁。建议拆成小事务")]),t._v(" "),a("li",[t._v("为表添加合理的索引。防止没有索引出现表锁，出现死锁的概率会突增")]),t._v(" "),a("li",[t._v("在事务中，如果要更新记录，应该直接申请足够级别的锁，即排他锁，而不应该先申请共享锁，更新时再申请排他锁，甚至死锁")]),t._v(" "),a("li",[t._v("在 Repeatable Read 隔离级别下，如果两个线程同时对相同条件记录用 "),a("code",[t._v("SELECT...ROR UPDATE")]),t._v(" 加排他锁，在没有符合该记录情况下，两个线程都会加锁成功。程序发现记录尚不存在，就试图插入一条新记录，如果两个线程都这么做，就会出现死锁。这种情况下，将隔离级别改成  Read Committed，就可以避免问题(降低隔离级别。如果业务允许(上面也分析了，某些业务并不能允许)，将隔离级别调低也是较好的选择，比如将隔离级别从 RR 调整为 RC，可以避免掉很多因为 GAP 锁造成的死锁)")]),t._v(" "),a("li",[t._v("当隔离级别为 Read Committed 时，如果两个线程都先执行 "),a("code",[t._v("SELECT...FOR UPDATE")]),t._v("，判断是否存在符合条件的记录，如果没有，就插入记录。此时，只有一个线程能插入成功，另一个线程会出现锁等待，当第 1 个线程提交后，第 2 个线程会因主键重出错，但虽然这个线程出错了，却会获得一个排他锁！这时如果有第 3 个线程又来申请排他锁，也会出现死锁。对于这种情况，可以直接做插入操作，然后再捕获主键重异常，或者在遇到主键重错误时，总是执行 rollback 释放获得的排他锁")])]),t._v(" "),a("p",[t._v("尽管通过上面的设计和优化等措施，可以减少死锁，但死锁很难完全避免。因此，在程序设计中总是捕获并处理死锁异常是一个很好的编程习惯")]),t._v(" "),a("p",[a("strong",[t._v("参考")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.csdn.net/qq_42765168/article/details/81514481",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据库中的乐观锁，悲观锁"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/paul8339/p/9936005.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MySQL数据库的锁详解"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/zero-gg/p/8576039.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MySQL锁总结"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/qq_41656259/article/details/82843042",target:"_blank",rel:"noopener noreferrer"}},[t._v("mysql对于锁的总结"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/16f71cec5a03",target:"_blank",rel:"noopener noreferrer"}},[t._v("MySQL之锁总结"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/u013982101/article/details/78504601",target:"_blank",rel:"noopener noreferrer"}},[t._v("mysql的锁总结"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000020592107",target:"_blank",rel:"noopener noreferrer"}},[t._v("MySQL-锁总结"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://crossoverjie.top/%2F2017%2F07%2F09%2FSSM15%2F",target:"_blank",rel:"noopener noreferrer"}},[t._v("乐观锁与悲观锁的实际应用"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=e.exports}}]);