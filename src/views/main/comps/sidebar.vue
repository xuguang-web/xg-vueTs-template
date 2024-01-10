<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="sidebar.collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
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
            <template v-for="subItem in item.subs">
              <el-sub-menu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template #title>{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem, i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >
                  {{ threeItem.title }}
                </el-menu-item>
              </el-sub-menu>
              <el-menu-item v-else>
                {{ subItem.title }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index" v-permiss="item.permiss">
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

const items = [
  {
    icon: "user",
    index: "/user",
    title: "用户页面"
  }
  // {
  //   icon: "PieChart",
  //   title: "canvas",
  //   subs: [
  //     {
  //       index: "/point",
  //       title: "指针动画",
  //     },
  //     {
  //       index: "/galaxy",
  //       title: "星系动画",
  //     }
  //   ]
  // }
]

const route = useRoute()
const onRoutes = computed(() => {
  return route.path
})

const sidebar = useSidebarStore()
</script>

<style lang="less" scoped>
:deep {
  .el-menu {
    background-image: url(../../../assets//img//sidebar/menu-bg.f3020d41.png);
    background-repeat: no-repeat;
    .el-sub-menu__title {
      color: #ffffff;
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
