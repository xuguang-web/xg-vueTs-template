<template>
  <div id="app">
    <el-config-provider :locale="zhCn">
      <router-view />
    </el-config-provider>
  </div>
</template>

<script setup lang="ts" name="App">
import { ElConfigProvider } from "element-plus"
import zhCn from "element-plus/es/locale/lang/zh-cn"
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;

  /* 隐藏滚动条 */
  ::-webkit-scrollbar {
    display: none;
  }

  /* 自定义滚动条样式 */
  ::-webkit-scrollbar {
    width: 8px; /* 设置宽度 */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ccc; /* 设置滑块颜色 */
    border-radius: 5px; /* 设置滑块圆角 */
  }

  ::-webkit-scrollbar-track {
    background-color: #f5f5f5; /* 设置滑道颜色 */
  }
}
</style>
