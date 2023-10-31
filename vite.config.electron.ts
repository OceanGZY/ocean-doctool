/*
 * @Author: OCEAN.GZY
 * @Date: 2023-10-22 09:44:32
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-10-28 09:40:44
 * @FilePath: \ocean-doctool\vite.config.electron.ts
 * @Description: 注释信息
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
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
  resolve: {
    alias: {
      "@": resolve(__dirname, 'src'), // 路径别名
    },
    extensions: ['.js', '.json', '.ts', '.vue','.md'] // 使用路径别名时想要省略的后缀名，可以自己 增减
  }
})
