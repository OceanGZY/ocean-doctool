/*
 * @Author: OCEAN.GZY
 * @Date: 2023-11-01 16:52:35
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-11-01 19:41:40
 * @FilePath: /ocean-doctool/src/views/mindppt/ppt-core/md2ppt.ts
 * @Description: 注释信息
 */

import MarkdownIt from 'markdown-it'
import { align } from "@mdit/plugin-align"
import { container } from "@mdit/plugin-container"
import { tasklist } from "@mdit/plugin-tasklist"
import { mark } from "@mdit/plugin-mark"
import { katex } from "@mdit/plugin-katex"
import { imgSize } from "@mdit/plugin-img-size"
import { uml } from "@mdit/plugin-uml"

export default class MD2PPT {
    public static md2ppt: any;

    public static init() {
        this.md2ppt = MarkdownIt()
        this.md2ppt.use(align)
            .use(container)
            .use(tasklist)
            .use(mark)
            .use(katex)
            .use(imgSize)
            .use(uml)
        return this.md2ppt
    }
}

