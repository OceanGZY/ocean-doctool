/*
 * @Author: OCEAN.GZY
 * @Date: 2023-10-22 09:44:32
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-10-22 10:47:40
 * @FilePath: /ocean-doctool/vite.config.ts
 * @Description: 注释信息
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import electron from 'vite-plugin-electron'
import electronRenderer from "vite-plugin-electron-renderer"

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // 设置打包路径
  plugins: [
    vue(),
    electron([
      {
        entry: "electron/main/index.ts",
        vite: {
          build: {
            sourcemap: true,
            outDir: "./dist/main"
          }
        }
      },
      {
        entry: "electron/preload/index.ts",
        vite: {
          build: {
            sourcemap: true,
            outDir: "./dist/preload"
          }
        }
      },
    ]),
    electronRenderer(),
  ],
})
