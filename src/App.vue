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
}
</style>
