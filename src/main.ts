// 样式处理
import "./assets/css/index.less"

import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue"
import router from "./router"
import piana from "./store"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(piana)

app.mount("#app")
