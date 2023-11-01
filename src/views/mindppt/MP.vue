<!--
 * @Author: OCEAN.GZY
 * @Date: 2023-10-22 13:33:40
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-10-31 21:37:00
 * @FilePath: /ocean-doctool/src/views/mindppt/MP.vue
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
                    input-style="height: 96%;width:94%;border:none;border-radius: 10px;box-shadow: 0 2px 6px 0 rgb(0 0 0 / 10%);" />
            </div>
            <div class="ppt-container">
                <iframe class="ppt-core" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"
                    :src=ppturl></iframe>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import "./mp.less"
import { ref, onMounted } from 'vue'
const textarea = ref('')
const ppturl = ref('')
onMounted(() => {
    console.log(window.location.hostname)
    ppturl.value = "http://" + window.location.hostname + ":3030"
})
</script>

<style lang="less" scoped></style>