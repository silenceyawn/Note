# Docker下Dubbo-Admin的使用

dubbo-admin 是官方提供的一个界面管理控制台，下载地址: [Github](https://github.com/apache/dubbo-admin)

## 1. 前言

可以自行下载到本地打包启动，详细启动可以查询文档: [https://github.com/apache/dubbo-admin/blob/develop/README_ZH.md](https://github.com/apache/dubbo-admin/blob/develop/README_ZH.md)，这里我是采用 Docker 的方式进行启动

## 2. 镜像

我们可以去 [Docker Hub](https://hub.docker.com/r/apache/dubbo-admin/tags) 查询版本号，然后直接启动 Docker，执行命令 `docker pull apache/dubbo-admin:latest` 下载最新版本镜像，使用命令 `docker images` 查看下载的镜像

```bash
PS C:\> docker pull apache/dubbo-admin:latest
latest: Pulling from apache/dubbo-admin
c5e155d5a1d1: Pull complete
221d80d00ae9: Pull complete
4250b3117dca: Pull complete
d1370422ab93: Pull complete
deb6b03222ca: Pull complete
9cdea8d70cc3: Pull complete
968505be14db: Pull complete
44086557786d: Pull complete
Digest: sha256:cc7a165b2a3ddf338b1b699414e01c673212e88b9b543af7f8757842997124ec
Status: Downloaded newer image for apache/dubbo-admin:latest
docker.io/apache/dubbo-admin:latest
PS C:\> docker images
REPOSITORY                TAG                               IMAGE ID            CREATED             SIZE
tomcat                    8.5.43-jdk8-adoptopenjdk-openj9   689bdcef64fe        4 months ago        339MB
elasticsearch             7.3.0                             bdaab402b220        4 months ago        806MB
elasticsearch             7.2.1                             1e8add8d7b66        4 months ago        862MB
apache/dubbo-admin        latest                            af2357c7df7e        7 months ago        489MB
mobz/elasticsearch-head   5                                 b19a5c98e43b        2 years ago         824MB
PS C:\>
```

## 3. 启动

查看: [Docker Hub](https://hub.docker.com/r/apache/dubbo-admin)，docker-compose 直接启动

```yml
version: '3'
services:
  zk:
    image: zookeeper
    container_name: zk
    ports:
      - 2181:2181
  dubbo-admin:
    image: apache/dubbo-admin
    container_name: dubbo-admin
    # 等待zk启动后再启动
    depends_on:
      - zk
    ports:
      - 8080:8080
    environment:
      - admin.registry.address=zookeeper://zk:2181
      - admin.config-center=zookeeper://zk:2181
      - admin.metadata-report.address=zookeeper://zk:2181
```

## 4. 其他

推荐一个非官方的: [Docker Hub](https://hub.docker.com/r/chenchuxin/dubbo-admin)

```yml
version: '3'
services:
  zk:
    image: zookeeper
    container_name: zk
    ports:
      - 2181:2181
  dubbo-admin:
    image: chenchuxin/dubbo-admin
    container_name: dubbo-admin
    # 等待zk启动后再启动
    depends_on:
      - zk
    ports:
      - 8080:8080
    environment:
      - dubbo.registry.address=zookeeper://zk:2181
      - dubbo.admin.root.password=root
      - dubbo.admin.guest.password=guest
```

**参考**

* [微服务框架（七）Docker容器部署（Dubbo、Zookeeper、Dubbo-admin）](https://blog.csdn.net/why_still_confused/article/details/81545336)
