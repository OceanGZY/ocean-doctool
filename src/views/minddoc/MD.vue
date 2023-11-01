<!--
 * @Author: OCEAN.GZY
 * @Date: 2023-11-01 10:39:00
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-11-01 14:23:57
 * @FilePath: /ocean-doctool/src/views/minddoc/MD.vue
 * @Description: 注释信息
-->
<template>
    <div class="minddoc">
        <div class="header">
            <span>OceanMindDoc,专为你定制的Doc工具～</span>
            <router-link to="/">回首页</router-link>
        </div>
        <div class="content">
            <QuillEditor class="editor" theme="snow" v-model="content" :options="editorOption" @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)" @ready="onEditorReady($event)" />
        </div>
    </div>
</template>

<script setup lang="ts">
import "./md.less"
import './quill-md.css';
import { ref } from 'vue'
import { QuillEditor } from '@vueup/vue-quill'


const content = ref('content: `<h2 class="ql-align-center"><span class="ql-font-serif">Text content loading..</span></h2>`,')
const editorOption = {
    modules: {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'font': [] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['clean'],
            ['link', 'image', 'video']
        ],
        // syntax: {
        //     highlight: text => hljs.highlightAuto(text).value
        // }
    }
}
const onEditorBlur = (editor: any) => {
    console.log('editor blur!', editor)
}
const onEditorFocus = (editor: any) => {
    console.log('editor focus!', editor)
}
const onEditorReady = (editor: any) => {
    console.log('editor ready!', editor)
}

</script>
<style lang="less" scoped>
</style>