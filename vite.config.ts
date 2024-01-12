import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // 在这里配置需要自动导入的模块
      dts:"src/auto-import.d.ts",
      imports: [
        'vue',
        'vue-router',
        'vuex'
        // 其他需要自动导入的库或组件
      ],
      resolvers:[]
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
