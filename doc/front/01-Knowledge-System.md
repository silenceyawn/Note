# 前端知识体系

## 1. 前端三要素

- HTML（结构）：超文本标记语言（Hyper Text Markup Language），决定网页的结构和内容
- CSS（表现）：层叠样式表（Cascading Style Sheets），设定网页的表现样式
- JavaScript（行为）：是一种弱类型脚本语言，其源代码不需经过编译，而是由浏览器解释运行，用于控制网页的行为

### 1.1. 结构层（HTML）

略

### 1.2. 表现层（CSS）

CSS 层叠样式表是一门标记语言，并不是编程语言，因此不可以自定义变量，不可以引用等，换句话说就是不具备任何语法支持，它主要缺陷如下：

- 语法不够强大，比如无法嵌套书写，导致模块化开发中需要书写很多重复的选择器；
- 没有变量和合理的样式复用机制，使得逻辑上相关的属性值必须以字面量的形式重复输出，导致难以维护；

这就导致了我们在工作中无端增加了许多工作量。为了解决这个问题，前端开发人员会使用一种称之为 **【CSS 预处理器】** 的工具，提供 CSS 缺失的样式层复用机制、减少冗余代码，提高样式代码的可维护性。大大提高了前端在样式上的开发效率。

#### 1.2.1. 什么是 CSS 预处理器

CSS 预处理器定义了一种新的语言，其基本思想是，用一种专门的编程语言，为 CSS 增加了一些编程的特性，将 CSS 作为目标生成文件，然后开发者就只要使用这种语言进行 CSS 的编码工作。转化成通俗易懂的话来说就是“**用一种专门的编程语言，进行 Web 页面样式设计，再通过编译器转化为正常的 CSS 文件，以供项目使用**”。

#### 1.2.2. 常用的 CSS 预处理器有哪些

- SASS：基于 Ruby，通过服务端处理，功能强大。解析效率高。需要学习 Ruby 语言，上手难度高于 LESS。
- LESS：基于 NodeJS，通过客户端处理，使用简单。功能比 SASS 简单，解析效率也低于 SASS，但在实际开发中足够了，所以我们后台人员如果需要的话，建议使用 LESS。

### 1.3. 行为层（JavaScript）

JavaScript 一门弱类型脚本语言，其源代码在发往客户端运行之前不需经过编译，而是将文本格式的字符代码发送给浏览器由浏览器解释运行。

#### 1.3.1. Native 原生 JS 开发

原生 JS 开发，也就是让我们按照 **【ECMAScript】** 标准的开发方式，简称是 ES，特点是所有浏览器都支持。截止到当前博客发布时间（2018 年 12 月 04 日），ES 标准已发布如下版本：

- ES3
- ES4（内部，未正式发布）
- ES5（全浏览器支持）
- ES6（常用，当前主流版本）
- ES7
- ES8
- ES9（草案阶段）

区别就是逐步增加新特性。

#### 1.3.2. TypeScript 微软的标准

TypeScript 是一种由微软开发的自由和开源的编程语言。它是 JavaScript 的一个超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程。由安德斯·海尔斯伯格（C#、Delphi、TypeScript 之父；.NET 创立者）主导。

该语言的特点就是除了具备 ES 的特性之外还纳入了许多不在标准范围内的新特性，所以会导致很多浏览器不能直接支持 TypeScript 语法，需要编译后（编译成 JS）才能被浏览器正确执行。

## 2. 三端统一

### 2.1. 混合开发（Hybrid App）

主要目的是实现一套代码三端统一（PC、Android、iOS）并能够调用到设备底层硬件（如：传感器、GPS、摄像头等），打包方式主要有以下两种：

- 云打包：HBuild -> HBuildX，DCloud 出品；API Cloud
- 本地打包： Cordova（前身是 PhoneGap）

### 2.2. 微信小程序

详见微信官网，这里就是介绍一个方便微信小程序 UI 开发的框架：WeUI

## 3. 后端技术

前端人员为了方便开发也需要掌握一定的后端技术，但我们 Java 后台人员知道后台知识体系极其庞大复杂，所以为了方便前端人员开发后台应用，就出现了 NodeJS 这样的技术。

NodeJS 的作者已经声称放弃 NodeJS（说是架构做的不好再加上笨重的 node_modules，可能让作者不爽了吧），开始开发全新架构的 Deno

既然是后台技术，那肯定也需要框架和项目管理工具，NodeJS 框架及项目管理工具如下：

- **Express：NodeJS 框架**
- **Koa：Express 简化版**
- **NPM：项目综合管理工具，类似于 Maven**
- **YARN：NPM 的替代方案，类似于 Maven 和 Gradle 的关系**

## 4. JavaScript 框架

- **jQuery**：大家熟知的 JavaScript 框架，优点是简化了 DOM 操作，缺点是 DOM 操作太频繁，影响前端性能；在前端眼里使用它仅仅是为了兼容 IE6、7、8；
- **Angular**：Google 收购的前端框架，由一群 Java 程序员开发，其特点是将后台的 MVC 模式搬到了前端并增加了模块化开发的理念，与微软合作，采用 TypeScript 语法开发；对后台程序员友好，对前端程序员不太友好；最大的缺点是版本迭代不合理（如：1 代 -> 2 代，除了名字，基本就是两个东西；截止发表博客时已推出了 Angular8）。Angular 作为 Google 推出的一个“重型”的框架，内置包括路由、HTTP 等常用组件，同时深度集成 TypeScript，WebPack，RxJS，angular-cli 等工具，可以方便地进行大型前端项目的开发以及调试。但是由于 Angular 引入了许多概念，增加了新手上手的复杂性。特别是组件、模块、服务、指令、依赖注入的引入，对于新手而言，厘清其中各个概念的作用域是就不是一件容易的事情。同时 RxJS 的引入，也进一步使得学习曲线变得陡峭。
- **React**：Facebook 出品，一款高性能的 JS 前端框架；特点是提出了新概念 **【虚拟 DOM】** 用于减少真实 DOM 操作，在内存中模拟 DOM 操作，有效的提升了前端渲染效率；缺点是使用复杂，因为需要额外学习一门 **【JSX】** 语言；
- **Vue**：一款渐进式 JavaScript 框架，所谓渐进式就是逐步实现新特性的意思，如实现模块化开发、路由、状态管理等新特性。其特点是综合了 Angular（模块化） 和 React（虚拟 DOM） 的优点；
- **Axios**：前端通信框架；因为 Vue 的边界很明确，就是为了处理 DOM，所以并不具备通信能力，此时就需要额外使用一个通信框架与服务器交互；当然也可以直接选择使用 jQuery 提供的 AJAX 通信功能；

### 4.1. UI 框架

- Ant-Design：阿里巴巴出品，基于 React 的 UI 框架
- ElementUI：饿了么出品，基于 Vue 的 UI 框架
- Bootstrap：Twitter 推出的一个用于前端开发的开源工具包
- AmazeUI：又叫“妹子 UI”，一款 HTML5 跨屏前端框架

### 4.2. JavaScript 构建工具

- Babel：JS 编译工具，主要用于浏览器不支持的 ES 新特性，比如用于编译 TypeScript
- WebPack：模块打包器，主要作用是打包、压缩、合并及按序加载

## 5. 附：前端框架介绍

### 5.1. Angular

#### 5.1.1. Angular Material

Angular Material 是 Angular 官方团队维护的一个遵从 Material Design 的 Angular UI 库。它提供了丰富的组件库、CDK、以及内置主题，开箱即用，并且与 Angular 版本同步。

- [官网地址](https://material.angular.io/)
- [Github](https://github.com/angular/components)

#### 5.1.2. ngx-admin

ngx-admin 是一款开源的 Angualr UI 库，目前仍处于维护和活跃状态。它也提供了丰富的开箱即用的组件库、内置主题，并且与 Angular 版本同步。代码风格遵循 Angular 最佳实践，也是一个不错的学习资源。

- [Github](https://github.com/akveo/ngx-admin)

### 5.2. Vue.js

#### 5.2.1. iView

iview 是一个强大的基于 Vue 的 UI 库，有很多实用的基础组件比 elementui 的组件更丰富，主要服务于 PC 界面的中后台产品。使用单文件的 Vue 组件化开发模式 基于 npm + webpack + babel 开发，支持 ES2015 高质量、功能丰富 友好的 API ，自由灵活地使用空间。

- [官网地址](https://www.iviewui.com/)
- [Github](https://github.com/TalkingData/iview-weapp)
- [iview-admin](https://github.com/iview/iview-admin)

**备注：属于前端主流框架，选型时可考虑使用，主要特点是移动端支持较多**

#### 5.2.2. ElementUI

Element 是饿了么前端开源维护的 Vue UI 组件库，组件齐全，基本涵盖后台所需的所有组件，文档讲解详细，例子也很丰富。主要用于开发 PC 端的页面，是一个质量比较高的 Vue UI 组件库。

- [官网地址](http://element-cn.eleme.io/#/zh-CN)
- [Github](https://github.com/ElementUI/element-starter)
- [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)

**备注：属于前端主流框架，选型时可考虑使用，主要特点是桌面端支持较多**

#### 5.2.3. ICE

飞冰是阿里巴巴团队基于 React/Angular/Vue 的中后台应用解决方案，在阿里巴巴内部，已经有 270 多个来自几乎所有 BU 的项目在使用。飞冰包含了一条从设计端到开发端的完整链路，帮助用户快速搭建属于自己的中后台应用。

- [官网地址](https://alibaba.github.io/ice)
- [Github](https://github.com/alibaba/ice)

**备注：主要组件还是以 React 为主，截止 2019 年 02 月 17 日更新博客前对 Vue 的支持还不太完善，目前尚处于观望阶段**

#### 5.2.4. VantUI

Vant UI 是有赞前端团队基于有赞统一的规范实现的 Vue 组件库，提供了一整套 UI 基础组件和业务组件。通过 Vant，可以快速搭建出风格统一的页面，提升开发效率。

- [官网地址](https://youzan.github.io/vant/#/zh-CN/intro)
- [Github](https://github.com/youzan/vant)

#### 5.2.5. AtUI

at-ui 是一款基于 Vue 2.x 的前端 UI 组件库，主要用于快速开发 PC 网站产品。 它提供了一套 npm + webpack + babel 前端开发工作流程，CSS 样式独立，即使采用不同的框架实现都能保持统一的 UI 风格。

- [官网地址](https://at-ui.github.io/at-ui/#/zh)
- [Github](https://github.com/at-ui/at-ui)

#### 5.2.6. CubeUI

cube-ui 是滴滴团队开发的基于 Vue.js 实现的精致移动端组件库。支持按需引入和后编译，轻量灵活；扩展性强，可以方便地基于现有组件实现二次开发。

- [官网地址](https://didi.github.io/cube-ui/#/zh-CN)
- [Github](https://github.com/didi/cube-ui/)

### 5.3. 混合开发

#### 5.3.1. Flutter

Flutter 是谷歌的移动端 UI 框架，可在极短的时间内构建 Android 和 iOS 上高质量的原生级应用。Flutter 可与现有代码一起工作, 它被世界各地的开发者和组织使用, 并且 Flutter 是免费和开源的。

- [官网地址](http://doc.flutter-dev.cn/)
- [Github](https://github.com/flutter/flutter)

**备注：Google 出品，主要特点是快速构建原生 APP 应用程序，如做混合应用该框架为必选框架**

#### 5.3.2. Ionic

Ionic 既是一个 CSS 框架也是一个 Javascript UI 库，Ionic 是目前最有潜力的一款 HTML5 手机应用开发框架。通过 SASS 构建应用程序，它提供了很多 UI 组件来帮助开发者开发强大的应用。它使用 JavaScript MVVM 框架和 AngularJS/Vue 来增强应用。提供数据的双向绑定，使用它成为 Web 和移动开发者的共同选择。

- [官网地址](https://ionicframework.com/)
- [官网文档](https://ionicframework.com/docs/)
- [Github](https://github.com/ionic-team/ionic)

### 5.4. 微信小程序

#### 5.4.1. mpvue

mpvue 是美团开发的一个使用 `Vue.js` 开发小程序的前端框架，目前支持 **微信小程序**、**百度智能小程序**，**头条小程序** 和 **支付宝小程序**。 框架基于 `Vue.js`，修改了的运行时框架 `runtime` 和代码编译器 `compiler` 实现，使其可运行在小程序环境中，从而为小程序开发引入了 `Vue.js` 开发体验。

- [官网地址](http://mpvue.com/)
- [Github](https://github.com/Meituan-Dianping/mpvue)

**备注：完备的 Vue 开发体验，并且支持多平台的小程序开发，推荐使用**

#### 5.4.4. WeUI

WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。包含 button、cell、dialog、toast、article、icon 等各式元素。

- [官网地址](https://weui.io/)
- [Github](https://github.com/weui/weui.git)