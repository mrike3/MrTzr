---
title: "插件"
order: 2
date: 2024-8-9 20:26:00
category:
  - 博客搭建
tags:
  - VuePress
  - VuePress-Plugin
  - 插件
icon: /assets/Plugin.svg
---
## 鼠标特效
基于<a href="https://github.com/moefyit/moefy-canvas">@moefy-canvas/theme-popper</a>，查看了<a href="https://oragekk.me/">Oragekk's Blog</a>这位博主的博客进行配置。  

首先安装依赖：
````pnpm
pnpm add @moefy-canvas
````
然后在`.vuepress`下创建`plugins`文件夹，在`plugins`文件夹下创建`vuepress-plugin-popper`文件夹，文件夹结构如下：
```shell
.
├──.vuepress
│   ├── plugins
│   │   └── vuepress-plugin-popper
│   │       ├── client
│   │       │   ├── components  
│   │       │   │   └── DenaroMoefyCanvas.ts
│   │       │   └── popper-client-config.ts  
│   │       ├── index.ts
│   │       └── type.ts
```

然后在`index.ts`中写入以下内容：
@[code typescript](../.vuepress/plugins/vuepress-plugin-popper/index.ts)
在`type.ts`中写入以下内容：
@[code typescript](../.vuepress/plugins/vuepress-plugin-popper/type.ts)
在`popper-client-main.ts`中写入以下内容：
@[code typescript](../.vuepress/plugins/vuepress-plugin-popper/client/popper-client-config.ts)
在`components`文件夹下创建`DenaroMoefyCanvas.ts`文件，写入以下内容：
@[code typescript](../.vuepress/plugins/vuepress-plugin-popper/client/components/DenaroMoefyCanvas.ts)

最后在`.vuepress/config.ts`中配置插件：
```typescript
import { defineUserConfig } from "vuepress";
import { popperPlugin } from "./plugins/vuepress-plugin-popper/index.js";
import { PopperShape } from "@moefy-canvas/theme-popper";
export default defineUserConfig({
    plugins: [
        popperPlugin({
            config: {
                shape: PopperShape.Star,
                size: 1.95,
                numParticles: 8,
            },
        }),
    ]
//     其它配置项
})
```
## 音乐播放器
借鉴MetingJS解析和使用APlayer作为播放组件，使用了[Oragekk's Blog](https://oragekk.me/)博主的开源项目[vuepress-plugin-meting2](https://oragekk.me/tutorial/OSS/meting2.html)
安装依赖：
::: tabs
@tab npm
````shell
npm i vuepress-plugin-meting2 -D
````
@tab pnpm
````shell
pnpm add vuepress-plugin-meting2 -D
````
:::
使用：
```typescript
import { defineUserConfig } from "vuepress";
import { metingPlugin } from "vuepress-plugin-meting2";
export default defineUserConfig({
    plugins: [
        metingPlugin({
            metingOptions: {
                global:true, // 开启关闭全局播放器
                server: "tencent",
                api: "https://api.injahow.cn/meting/?server=:server&type=:type&id=:id&auth=:auth&r=:r",
                type: "playlist",
                mid: "851947617",
            },
        }),
    ]
//     其它配置项
})
```
## 参考博客站点
```component SiteInfo
name: Oragekk's Blog
desc: 愿人生如剑，立起寒光四射，躺倒四射寒光。
url: https://oragekk.me/
logo: https://oragekk.me/logo.svg
repo: https://github.com/OrageKK/oragekk.github.io
preview: /assets/Preview/Oragekk-Preview.png
```



