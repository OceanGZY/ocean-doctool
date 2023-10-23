/*
 * @Author: OCEAN.GZY
 * @Date: 2023-10-22 13:04:44
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-10-23 15:52:58
 * @FilePath: /ocean-doctool/src/main.ts
 * @Description: 注释信息
 */
import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircle,faSquare,faSquareCaretDown } from '@fortawesome/free-regular-svg-icons'

import './style.css'
import App from './App.vue'
import { router } from "./router"

library.add(faCircle,faSquare,faSquareCaretDown)

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
