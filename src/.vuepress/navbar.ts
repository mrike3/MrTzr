import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/intro",
{
    text: "文档",
    icon: "pen-to-square",
    prefix: "/docs/",
    children:[
        {text: "VitePress", icon:"https://vitepress.dev/vitepress-logo-mini.svg",link: "/docs/VitePress/"}
    ],
},
"/about/",
]);
