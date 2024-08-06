import { defineUserConfig } from "vuepress";
import {getDirname,path} from 'vuepress/utils'
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
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

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});