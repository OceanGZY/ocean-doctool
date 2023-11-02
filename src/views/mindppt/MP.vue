<!--
 * @Author: OCEAN.GZY
 * @Date: 2023-10-22 13:33:40
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-11-02 23:16:27
 * @FilePath: \ocean-doctool\src\views\mindppt\MP.vue
 * @Description: 注释信息
-->
<template>
    <div class="mindppt">
        <div class="header">
            <span>OceanMindPPT,专为你定制的演讲工具～</span>
            <router-link to="/">回首页</router-link>
        </div>
        <div class="content">
            <div class="edit-container">
                <el-input v-model="textarea" type="textarea" placeholder="请使用markdown的输入方法输入" resize="none"
                    input-style="height: 96%;width:94%;border:none;border-radius: 10px;box-shadow: 0 2px 6px 0 rgb(0 0 0 / 10%);"
                    @input="domd2ppt" />
            </div>
            <div class="ppt-container">
                <article id="webslides" v-html="pptdata">
                </article>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import "./mp.less"
import { ref, onMounted } from 'vue'
import "./ppt-core/webslides/js/webslides.js"
import "./ppt-core/webslides/js/svg-icons.js"
import "./ppt-core/webslides/css/webslides.css"
import "./ppt-core/webslides/css/svg-icons.css"
import "katex/dist/katex.min.css"
import MD2PPT from "./ppt-core/md2ppt"
import { parser } from 'posthtml-parser'
import { render } from 'posthtml-render'

const textarea = ref('# 欢迎使用OceanMind PTT~')
const pptdata = ref('')
let md2ppt: any
onMounted(() => {
    md2ppt = MD2PPT.init()
    pptdata.value = '<sction id="section" class="slide" ><div class="wrap size-50 aligncenter"><h2><strong>Why WebSlides?</strong></h2><p class="text-intro">Good karma &amp; Productivity.</p></div></sction>'
    console.log(parser(pptdata.value))
})

const domd2ppt = (value: any) => {
    console.log(value)
    const htmlold = md2ppt.render(value)
    const asttemp = parser(htmlold)
    console.log("将原Html转换后的语法树是:")
    console.log(asttemp)
    let temp: any[] = []
    asttemp.forEach(element => {
        switch (element) {
            case element != "\n":
                break;
            default:
                temp.push(element)
                break;
        }
    });
    console.log(temp)

    const htmlnew = render(temp)
    console.log("转换后的Html是：")

    console.log(htmlnew)
    pptdata.value = htmlnew


    // console.log(
    //     parser('<sction id="section" class="slide" ><div class="wrap size-50 aligncenter"><h2><strong>Why WebSlides?</strong></h2><p class="text-intro">Good karma &amp; Productivity.</p></div></sction>')
    // )
}
</script>

<style lang="less" scoped></style>