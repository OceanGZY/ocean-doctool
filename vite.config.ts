/*
 * @Author: OCEAN.GZY
 * @Date: 2023-10-22 09:44:32
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-10-28 17:29:24
 * @FilePath: /ocean-doctool/vite.config.ts
 * @Description: 注释信息
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, 'src'), // 路径别名
    },
    extensions: ['.js', '.json', '.ts', '.vue'] // 使用路径别名时想要省略的后缀名，可以自己 增减
  },
  optimizeDeps: { exclude: ["fsevents"] }
})
 