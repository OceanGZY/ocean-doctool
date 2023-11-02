/*
 * @Author: OCEAN.GZY
 * @Date: 2023-11-02 16:35:30
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-11-02 16:36:24
 * @FilePath: /ocean-doctool/src/views/mindppt/ppt-core/mdkatex/utils.ts
 * @Description: 注释信息
 */
export const escapeHtml = (unsafeHTML: string): string =>
  unsafeHTML
    .replace(/&/gu, "&amp;")
    .replace(/</gu, "&lt;")
    .replace(/>/gu, "&gt;")
    .replace(/"/gu, "&quot;")
    .replace(/'/gu, "&#039;");