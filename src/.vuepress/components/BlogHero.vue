<!-- .vuepress/components/BlogHero.vue -->
<script setup lang="ts">
import BlogHero from "vuepress-theme-hope/blog/components/BlogHero.js";
import BingHeroBackground from "vuepress-theme-hope/presets/BingHeroBackground.js";
import HitokotoBlogHero from "vuepress-theme-hope/presets/HitokotoBlogHero.js";

import {ref} from "vue";
const flag=ref(false)
function changeBg(){

}
</script>

<template>
  <BlogHero>
    <template #bg>
      <el-button type="info" id="spchange" v-if="!flag" @click="changeBg()">
        <template #icon>
          <el-icon><ArrowRightBold /></el-icon>
        </template>
      </el-button>

      <el-button type="text" id="bzchange" title="切换壁纸" @click="flag=!flag">
        <template #icon>
          <el-icon size="30" color="#fff"><Lollipop /></el-icon>
        </template>
      </el-button>
      <BingHeroBackground v-if="flag"  />
      <video v-if="!flag" id="mp4bz"
          src="https://img-baofun.zhhainiao.com/pcwallpaper_ugc/preview/2253a3fece562937f104eab6aeee4e07_preview.mp4"
          autoplay
          loop
          muted
      ></video>
    </template>
    <template #info="info">
      <HitokotoBlogHero v-bind="info" />
    </template>
    <template>
      00
    </template>
  </BlogHero>

</template>
<style>
#spchange{
  opacity: 0.4;
  width: 20px;
  position: absolute;
  right: 20px;
  bottom: 20px;
}
#spchange:hover{
  opacity: 1;
}

@media (max-device-width: 768px) {
  #mp4bz{
    z-index: 0;
    position: absolute;
    height: 100%
  }
}
@media (min-device-width: 768px) {
  #mp4bz{
    z-index: 0;
    position: absolute;
    width: 100%
  }
}

#bzchange{
  position: absolute;
  width: 25px;
  right: 20px;
  opacity: 0.4;
  transition: all 0.3s ease-in-out;
}
#bzchange:hover{
  opacity: 1;
}
</style>