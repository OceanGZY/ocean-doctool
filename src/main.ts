/*
 * @Author: OCEAN.GZY
 * @Date: 2023-10-22 13:04:44
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-10-30 21:49:41
 * @FilePath: /ocean-doctool/src/main.ts
 * @Description: 注释信息
 */
import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircle, faSquare, faSquareCaretDown } from '@fortawesome/free-regular-svg-icons'
import Antd from 'ant-design-vue'

// import './style.css'
import './reset.less'
import App from './App.vue'
import router from "./router"
import store from "./store"
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/views/mindmap/map-core/assets/icon-font/iconfont.css'
import '@/views/mindmap/map-core/assets/icon-font/iconfont.css'
import i18n from '@/views/mindmap/map-core/i18n.js'


library.add(faCircle, faSquare, faSquareCaretDown)

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(Antd)
app.use(VueViewer, {
    defaultOptions: {
        'inline': true,
        'button': true, //右上角按钮
        "navbar": true, //底部缩略图
        "title": true, //当前图片标题
        "toolbar": true, //底部工具栏
        "tooltip": true, //显示缩放百分比
        "movable": true, //是否可以移动
        "zoomable": true, //是否可以缩放
        "rotatable": true, //是否可旋转
        "scalable": true, //是否可翻转
        "transition": true, //使用 CSS3 过度
        "fullscreen": true, //播放时是否全屏
        "keyboard": true, //是否支持键盘
        "url": "data-source",
    }
})
app.use(store)
app.use(i18n)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
