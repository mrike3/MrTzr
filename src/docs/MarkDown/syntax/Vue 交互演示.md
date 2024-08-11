---
title: Vue 交互演示
order: 3
date: 2024-08-11
category:
  - MarkDown增强
tags:
  - Vue
  - 交互演示
---
<style>
pre{
width:100vh
}
</style>
## Vue 交互演示
首先安装依赖：
```shell
pnpm add -D @vue/repl
```

<Toggle>
<template #content>

::: vue-playground Vue交互演示
@file App.vue
```vue
<script setup>
import { ref } from "vue";

const msg = ref("你好交互演示!");
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
</template>
```
:::
</template>
<template #code>

@[code{21-35}](Vue 交互演示.md)
</template>
</Toggle>