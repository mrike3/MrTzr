import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/about/": [
    {
      text: "关于本站",
      icon: "laptop-code",
      children: "structure",
    },
  ],
  "/docs/VitePress/": [
    {
      text: "VitePress",
      icon: "https://vitepress.dev/vitepress-logo-mini.svg",
      children: "structure"
    }
  ],
  "/docs/MarkDown/": [
    {
      text: "MarkDown学习",
      icon: "/assets/icon/markdown.svg",
      children:"structure"
    }
  ],
  "/docs/Python/": [
    {
      text: "Python学习",
      icon: "/assets/icon/python.svg",
      children:"structure"
    }
  ],
});
