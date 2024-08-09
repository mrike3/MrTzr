import { defineUserConfig } from "vuepress";
import {getDirname,path} from 'vuepress/utils'
import theme from "./theme.js";
import metingPlugin from 'vuepress-plugin-meting2'

import { popperPlugin } from "./plugins/vuepress-plugin-popper/index.js";
import { PopperShape } from "@moefy-canvas/theme-popper";

import { oml2dPlugin } from 'vuepress-plugin-oh-my-live2d';


const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  head:[
    ["link", { rel: "icon", href: "https://mrike3.github.io/MrTzr/assets/images/tx.png" }],
    ['meta', {name: 'referrer', content: 'no-referrer-when-downgrade'}],

  ],

  base: "/MrTzr/",
  lang: "zh-CN",
  title: "Mr.Tzr's Blog",
  description: "vuepress-theme-hope 的博客演示",
  theme,

  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
        __dirname,
        "./components/BlogHero.vue",
    ),
  },
  plugins:[
    metingPlugin({
      metingOptions: {
        global:true, // 开启关闭全局播放器
        server: "163",
        api: "https://api.injahow.cn/meting/?server=:server&type=:type&id=:id&auth=:auth&r=:r",
        type: "playlist",
        mid: "5095361173",
      },
    }),
    popperPlugin({
      config: {
        shape: PopperShape.Star,
        size: 1.95,
        numParticles: 8,
      },
    }),

    // oml2dPlugin({
    //   // 在这里配置选项
    //   models: [
    //     {
    //       path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json',
    //       scale: 0.12,
    //       position: [-10, 50],
    //       stageStyle: {
    //         width: 350
    //       }
    //     }
    //   ]
    // })
  ]
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});