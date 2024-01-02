import { createRouter, createWebHistory } from "vue-router"
import localCache from "@/utils/cache"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/main"
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/login/login.vue")
    },
    {
      path: "/main",
      name: "main",
      component: () => import("@/views/main/main.vue")
    },
    {
      path: "/:patchMatch(.*)",
      component: () => import("@/views/notFound/not-found.vue")
    }
  ]
})

router.beforeEach((to) => {
  const token = localCache.getCache("token")
  if (to.path !== "/login") {
    if (!token) {
      return "/login"
    }
  }
})

export default router
