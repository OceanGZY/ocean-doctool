<!--
 * @Author: OCEAN.GZY
 * @Date: 2023-10-28 19:42:02
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-10-30 19:42:27
 * @FilePath: /ocean-doctool/src/views/mindmap/MM.vue
 * @Description: 注释信息
-->
<template>
    <div class="mindmap">
        <div class="header">
            <span>OceanMindMap,专为你定制的脑图工具～</span>
            <router-link to="/">回首页</router-link>
        </div>
        <div id="mindMapContainer" class="mindMapContainer"></div>
        <mind-map-edit></mind-map-edit>
    </div>
</template>

<script setup lang="ts">
import MindMapEdit from "./map-core/pages/Edit/Edit.vue"
import "./mm.less"
</script>

<style lang="less" scoped></style>