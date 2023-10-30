/*
 * @Author: OCEAN.GZY
 * @Date: 2023-08-04 13:54:38
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-10-30 19:51:41
 * @FilePath: /ocean-doctool/src/views/mindmap/map-core/i18n.js
 * @Description: 注释信息
 */
import { createI18n } from 'vue-i18n'
import messages from './lang'
import { getLang } from '@/views/mindmap/map-core/api'

const i18n = createI18n({
  legacy: false,
  locale: getLang(),
  messages
})

export default i18n
