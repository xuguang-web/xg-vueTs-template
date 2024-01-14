<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="sidebar.collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
    >
      <img src="../../../assets/img/sidebar/menu-bg-bottom.7b20809a.png" alt="" />
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-sub-menu :index="item.index" :key="item.index">
            <template #title>
              <el-icon>
                <component :is="item.icon"></component>
              </el-icon>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="subitem in item.subs" :key="subitem.index">
              <el-menu-item @click="handleItemClick(subitem)">
                {{ subitem.title }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useSidebarStore } from "@/store/sidebar"
import { useRoute } from "vue-router"
import { items } from "../config"

const route = useRoute()
const router = useRouter()
const onRoutes = computed(() => {
  return route.path
})

const handleItemClick = (item) => {
  router.push(item.index)
}

const sidebar = useSidebarStore()
</script>

<style lang="less" scoped>
:deep {
  .el-menu {
    background-image: url(../../../assets//img//sidebar/menu-bg.f3020d41.png);
    background-repeat: no-repeat;
    .el-sub-menu__title {
      color: #ffffff;
      &:hover {
        background-color: #337ecc;
      }
    }
    &-item {
      color: #ffffff;
      &:hover {
        background-color: #337ecc;
      }
    }
  }
}
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
  &-el-menu {
    position: relative;
    img {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 400px;
    }
  }
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>
