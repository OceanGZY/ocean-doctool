/*
 * @Author: OCEAN.GZY
 * @Date: 2023-10-22 13:04:44
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-10-28 15:37:50
 * @FilePath: \ocean-doctool\src\main.ts
 * @Description: 注释信息
 */
import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircle,faSquare,faSquareCaretDown } from '@fortawesome/free-regular-svg-icons'
import Antd from 'ant-design-vue'

// import './style.css'
import './reset.less'
import App from './App.vue'
import  router  from "./router"

library.add(faCircle,faSquare,faSquareCaretDown)

createApp(App)
    .use(router)
    .use(Antd)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
