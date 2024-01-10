<template>
  <div class="main">
    <xg-header></xg-header>
    <xg-sidebar></xg-sidebar>
    <div class="content-box" :class="{ 'content-collapse': sidebar.collapse }">
      <div class="content">
        <router-view> </router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="main">
import xgHeader from "./comps/header.vue"
import xgSidebar from "./comps/sidebar.vue"
import { useSidebarStore } from "@/store/sidebar"

const sidebar = useSidebarStore()
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
