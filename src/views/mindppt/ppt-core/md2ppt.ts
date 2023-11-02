/*
 * @Author: OCEAN.GZY
 * @Date: 2023-11-01 16:52:35
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-11-02 16:57:06
 * @FilePath: /ocean-doctool/src/views/mindppt/ppt-core/md2ppt.ts
 * @Description: 注释信息
 */

import MarkdownIt from 'markdown-it'
import { align } from "@mdit/plugin-align"
import { container } from "@mdit/plugin-container"
import { tasklist } from "@mdit/plugin-tasklist"
import { mark } from "@mdit/plugin-mark"
import { imgSize } from "@mdit/plugin-img-size"
import { uml } from "@mdit/plugin-uml"
import { mdkatex } from "./mdkatex/index"

export default class MD2PPT {
    public static md2ppt: any;

    public static init() {
        this.md2ppt = MarkdownIt()
        this.md2ppt.use(align)
            .use(container)
            .use(tasklist)
            .use(mark)
            .use(imgSize)
            .use(uml)
            .use(mdkatex)
        return this.md2ppt
    }
}

