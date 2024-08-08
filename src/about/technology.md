---
cover: /assets/images/other/游戏少女.jpg
title: "使用的生成器"
date: 2024-8-8
sticky: 10
category:
  - 博客搭建
tags:
  - VuePress
  - VuePress-theme-hope
icon: /assets/icon/科学技术-82.svg
---
## 生成器
```component VPCard
title: VuePress
desc: VuePress 是一个由 Vue.js 驱动的静态网站生成器，它是由 Vue 官方团队成员开发的。
logo: https://vuepress.vuejs.org/images/hero.png
link: https://vuepress.vuejs.org/zh/?from=eTab
```
本站使用 **VuePress** 作为静态页面生成器，它是一个基于 Vue.js 的快速、简洁且高效的静态网站生成器。它的诞生初衷是为了支持 Vue 及其子项目的文档需求，并且能够提供一个简单而又灵活的配置项, 让用户能够快速搭建自己的网站。
## 主题
```component VPCard
title: VuePress-theme-hope
desc: VuePress-theme-hope 是 VuePress 官方的主题，它是由 VuePress 官方团队成员开发的。
logo: https://vuepress-theme-hope.github.io/v2/logo.png
link: https://theme-hope.vuejs.press/zh/?from=eTab
```
本站使用 **VuePress-theme-hope** 作为主题，它是 VuePress 官方的主题，它是一个简洁、美观且功能丰富的主题。它的诞生初衷是为了满足 VuePress 用户的需求，并且能够提供一个开箱即用的主题，让用户能够快速上手。
## 搭建
在需要创建项目的目录下，使用以下命令进行初始化：
::: tabs#tab-cmd
@tab npm
````npm
npm init vuepress-theme-hope@latest my-docs
````
@tab pnpm
````pnpm
pnpm create vuepress-theme-hope my-docs
````
@tab yarn
````yarn
yarn create vuepress-theme-hope my-docs
````
:::
> [!warning]
> 使用命令前需安装对应的包管理器。例如<a href="https://nodejs.org/">Node.js</a>

根据提示创建完成后，进入项目目录，使用以下命令启动项目：
::: tabs#tab-cmd
@tab npm
````npm
npm run docs:dev
````
@tab pnpm
````pnpm
pnpm run docs:dev
````
@tab yarn
````yarn
yarn run docs:dev
````
:::
通过浏览器访问 `http://localhost:8080/` 即可看到效果。