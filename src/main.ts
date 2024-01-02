// 样式处理
import "./assets/css/index.less"

import { createApp } from "vue"
import { createPinia } from "pinia"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from "./App.vue"
import router from "./router"
import piana from "./store"

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

app.use(createPinia())
app.use(router)
app.use(piana)
app.use(ElementPlus)

app.mount("#app")
