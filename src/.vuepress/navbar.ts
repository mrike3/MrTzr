import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/intro",
{
    text: "文档",
    icon: "pen-to-square",
    prefix: "/docs/",
    children:[
        {text: "VitePress", icon:"https://vitepress.dev/vitepress-logo-mini.svg",link: "/docs/VitePress/"},
        {text: "英语语法", icon:"https://hzpt-inet-club.github.io/english-note/logo/logo.svg",link: "https://hzpt-inet-club.github.io/english-note/"},
        {text: "Markdown学习", icon:"/assets/icon/markdown.svg",link: "/docs/MarkDown/"},
    ],
},
"/about/",
]);
