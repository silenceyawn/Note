(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{410:function(t,r,a){"use strict";a.r(r);var e=a(11),s=Object(e.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"rabbitmq的安装使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq的安装使用"}},[t._v("#")]),t._v(" RabbitMQ的安装使用")]),t._v(" "),a("p",[t._v("RabbitMQ 是以 AMQP 协议实现的一种中间件产品，它可以支持多种操作系统，多种编程语言，几乎可以覆盖所有主流的企业级技术平台")]),t._v(" "),a("h2",{attrs:{id:"_1-概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-概念"}},[t._v("#")]),t._v(" 1. 概念")]),t._v(" "),a("h3",{attrs:{id:"_1-1-message-broker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-message-broker"}},[t._v("#")]),t._v(" 1.1. Message Broker")]),t._v(" "),a("p",[t._v("Message Broker 是一种消息验证、传输、路由的架构模式，其设计目标主要应用于下面这些场景")]),t._v(" "),a("ul",[a("li",[t._v("消息路由到一个或多个目的地")]),t._v(" "),a("li",[t._v("消息转化为其他的表现方式")]),t._v(" "),a("li",[t._v("执行消息的聚集、消息的分解，并将结果发送到他们的目的地，然后重新组合相应返回给消息用户")]),t._v(" "),a("li",[t._v("调用 Web 服务来检索数据")]),t._v(" "),a("li",[t._v("响应事件或错误")]),t._v(" "),a("li",[t._v("使用发布-订阅模式来提供内容或基于主题的消息路由")])]),t._v(" "),a("h3",{attrs:{id:"_1-2-amqp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-amqp"}},[t._v("#")]),t._v(" 1.2. AMQP")]),t._v(" "),a("p",[t._v("AMQP 是 Advanced Message Queuing Protocol 的简称，它是一个面向消息中间件的开放式标准应用层协议。AMQP 定义了这些特性")]),t._v(" "),a("ul",[a("li",[t._v("消息方向")]),t._v(" "),a("li",[t._v("消息队列")]),t._v(" "),a("li",[t._v("消息路由（包括：点到点和发布-订阅模式）")]),t._v(" "),a("li",[t._v("可靠性")]),t._v(" "),a("li",[t._v("安全性")])]),t._v(" "),a("h2",{attrs:{id:"_2-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装"}},[t._v("#")]),t._v(" 2. 安装")]),t._v(" "),a("p",[t._v("这里介绍的是 Windows 10 下的安装，首先我们需要知道 RabbitMQ 对应的 Erlang/OTP 版本: "),a("a",{attrs:{href:"https://www.rabbitmq.com/which-erlang.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.rabbitmq.com/which-erlang.html"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2020/01/20200116008.png",alt:"图片"}})]),t._v(" "),a("h3",{attrs:{id:"_2-1-下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-下载"}},[t._v("#")]),t._v(" 2.1. 下载")]),t._v(" "),a("p",[t._v("这里我们直接下载 RabbitMQ 最新版的 3.8.2: "),a("a",{attrs:{href:"https://www.rabbitmq.com/download.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.rabbitmq.com/download.html"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2020/01/20200116009.png",alt:"图片"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2020/01/20200116010.png",alt:"图片"}})]),t._v(" "),a("p",[t._v("随便点击一个就行，第二个是备选下载链接")]),t._v(" "),a("p",[t._v("然后是Erlang/OTP 22: "),a("a",{attrs:{href:"https://www.erlang.org/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.erlang.org/downloads"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2020/01/20200116011.png",alt:"图片"}})]),t._v(" "),a("p",[t._v("选择 Windows 64 位的，发现下载速度贼慢")]),t._v(" "),a("p",[t._v("去这里下载(RabbitMQ官网提供的Erlang下载地址): "),a("a",{attrs:{href:"https://www.erlang-solutions.com/resources/download.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.erlang-solutions.com/resources/download.html"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2020/01/20200116012.png",alt:"图片"}})]),t._v(" "),a("h3",{attrs:{id:"_2-2-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-安装"}},[t._v("#")]),t._v(" 2.2. 安装")]),t._v(" "),a("p",[t._v("下载完成，两个都以管理员运行，先安装 Erlang/OTP，再安装 RabbitMQ，安装一路默认下去即可，不用多余选择，我只把安装位置改了下 D:\\Tools")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2020/01/20200116013.png",alt:"图片"}})]),t._v(" "),a("p",[t._v("装完了，可以看到 RabbitMQ Server 安装完成之后，会自动的注册为服务，并以默认配置启动起来")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2020/01/20200116014.png",alt:"图片"}})]),t._v(" "),a("h3",{attrs:{id:"_2-3-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-配置"}},[t._v("#")]),t._v(" 2.3. 配置")]),t._v(" "),a("p",[t._v("配置下 erlang 的系统变量 "),a("code",[t._v("ERLANG_HOME=D:\\Tools\\erl10.5")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2020/01/20200116015.png",alt:"图片"}})]),t._v(" "),a("p",[t._v("验证 RabbitMQ 是否安装成功，进入：D:\\Tools\\RabbitMQ Server\\rabbitmq_server-3.8.2\\sbin，执行："),a("code",[t._v("rabbitmqctl.bat status")])]),t._v(" "),a("p",[t._v("然后激活下 Rabbit MQ's Management Plugin，使用 RabbitMQ 管理插件，可以更好的可视化方式查看 RabbitMQ 服务器实例的状态，你可以在命令行中使用下面的命令激活")]),t._v(" "),a("p",[t._v("输入: "),a("code",[t._v("rabbitmq-plugins.bat enable rabbitmq_management")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2020/01/20200116016.png",alt:"图片"}})]),t._v(" "),a("p",[a("code",[t._v("D:\\Tools\\RabbitMQ Server")]),t._v(" 路径不能有空格，只能卸载重装 RabbitMQ 了")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2020/01/20200116017.png",alt:"图片"}})]),t._v(" "),a("p",[t._v("重装后去掉空格就好了")]),t._v(" "),a("h2",{attrs:{id:"_3-使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用"}},[t._v("#")]),t._v(" 3. 使用")]),t._v(" "),a("p",[t._v("启动 RabbitMQ，输入命令 "),a("code",[t._v("rabbitmq-server")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2020/01/20200117002.png",alt:"图片"}})]),t._v(" "),a("p",[t._v("发现服务无法启动，最后发现好像是我 Windows 10 用户名为中文的原因，修改用户名为英文，参考: "),a("a",{attrs:{href:"https://www.cnblogs.com/WhiteTears/p/8947337.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/WhiteTears/p/8947337.html"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2020/01/20200117001.png",alt:"图片"}})]),t._v(" "),a("p",[t._v("再启动就行了，然后访问: "),a("a",{attrs:{href:"http://localhost:15672",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:15672"),a("OutboundLink")],1),t._v("，用guest/guest登录就可以打开管理的 Web 界面")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2020/01/20200117003.png",alt:"图片"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2020/01/20200117004.png",alt:"图片"}})]),t._v(" "),a("h2",{attrs:{id:"_4-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-docker"}},[t._v("#")]),t._v(" 4. Docker")]),t._v(" "),a("p",[t._v("转移到 Docker 专栏: "),a("RouterLink",{attrs:{to:"/docker/06-RabbitMQ.html"}},[t._v("Docker下RabbitMQ的使用及集群搭建 ")])],1),t._v(" "),a("p",[a("strong",[t._v("参考")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.csdn.net/wqc19920906/article/details/82194716",target:"_blank",rel:"noopener noreferrer"}},[t._v("RabbitMQ学习（二）window下安装RabbitMQ"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://blog.didispace.com/spring-boot-rabbitmq/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Boot中使用RabbitMQ"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=s.exports}}]);