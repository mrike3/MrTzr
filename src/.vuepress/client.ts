import { defineClientConfig } from "vuepress/client";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import { setupSnowFall } from "vuepress-theme-hope/presets/snowFall.js";
import 'vuepress-theme-hope/presets/round-blogger-avatar.scss';
import 'vuepress-theme-hope/presets/bounce-icon.scss';
import toggle from './components/toggle.vue'
import $ from 'jquery'


import elementplus from 'element-plus'

export default defineClientConfig({
    enhance({app, router, siteData}) {
        app.use(elementplus)
        app.component('Toggle', toggle)
        app.use($)
    },

    setup() {
        setupSnowFall(),
        setupRunningTimeFooter(
            new Date("2024-08-06"),
            {
                "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
            },
            true,
        );
    },
});