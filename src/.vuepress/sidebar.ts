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
  ]
});
