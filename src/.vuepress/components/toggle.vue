<script setup lang="ts">
import 'element-plus/dist/index.css'
import { ref } from 'vue'
import $ from 'jquery'

const showCode = ref(false)
const btnicon=ref(null)
function toggleCode() {
  if(!showCode.value){
    $(btnicon.value).css({
      transform: 'rotate(90deg)'
    })
  }else{
    $(btnicon.value).css({
      transform: 'rotate(0deg)'
    })
  }
  showCode.value= !showCode.value
}
</script>

<template>
<el-row style="width: 100%;flex-direction: column;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);border-radius: 10px;
  " justify="start" align="middle">
  <el-row style="width: 100%;height: 60px;border-top-left-radius: 10px;
  border-top-right-radius: 10px;background-color: #eee;" align="middle">
    <el-button round style="width: 24px;margin-left: 20px" @click="toggleCode" >
      <template #icon>
        <svg ref="btnicon" style="transition: all 0.3s ease-out;" t="1723372809012" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5836" width="18" height="18"><path d="M595.7 511.1L240.8 866l93.2 93.1 447.4-447.4-0.6-0.6 0.6-0.5L334 63.1l-93.2 93.2z" fill="#8a8a8a" p-id="5837"></path></svg>
      </template>
    </el-button>
    <font style="margin-left: 10px">
      <slot name="title"></slot>
    </font>
  </el-row>
  <el-row style="width: 100%;padding: 10px" justify="center" align="middle">
    <slot name="content"></slot>
  </el-row>
  <transition name="fade" appear>
    <el-row style="width: 100%;" align="middle" justify="center" v-if="showCode">
      <slot name="code">
      </slot>
    </el-row>
  </transition>
</el-row>
</template>

<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease-out;
}
.fade-enter-from,
.fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>