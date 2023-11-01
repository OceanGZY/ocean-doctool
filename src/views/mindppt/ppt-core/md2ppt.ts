/*
 * @Author: OCEAN.GZY
 * @Date: 2023-11-01 16:52:35
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-11-01 17:02:27
 * @FilePath: /ocean-doctool/src/views/mindppt/ppt-core/md2ppt.ts
 * @Description: 注释信息
 */

import MarkdownIt from 'markdown-it'


export default class MD2PPT {
    public static md2ppt: any;

    public static init() {
        this.md2ppt = MarkdownIt()
        return this.md2ppt
    }
}

