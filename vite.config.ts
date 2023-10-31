/*
 * @Author: OCEAN.GZY
 * @Date: 2023-10-22 09:44:32
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-10-31 19:49:58
 * @FilePath: /ocean-doctool/vite.config.ts
 * @Description: 注释信息
 */
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  loadEnv(mode, process.cwd())
  return {
    plugins: [
      vue()
    ],
    resolve: {
      alias: {
        "@": resolve(__dirname, 'src'), // 路径别名
      },
      extensions: ['.js', '.json', '.ts', '.vue','.md'] // 使用路径别名时想要省略的后缀名，可以自己 增减
    },
    // optimizeDeps: { exclude: ["fsevents"] }
    // build: {
    //   commonjsOptions: {
    //     esmExternals: true
    //   },
    // }
  };
})
