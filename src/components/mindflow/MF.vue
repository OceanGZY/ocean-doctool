<!--
 * @Author: OCEAN.GZY
 * @Date: 2023-10-22 17:39:29
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-10-22 18:24:05
 * @FilePath: \ocean-doctool\src\components\mindflow\MF.vue
 * @Description: 注释信息
-->
<template>
    <div class="mindflow" id="mindflow"></div>
</template>

<script setup lang="ts">
import { Graph } from "@antv/x6"
import { onMounted } from "vue"

let graph: Graph

const graphInit = () => {
    graph = new Graph({
        container: document.getElementById("mindflow") as HTMLElement,
        width: 1000,
        height: 1000,
        background: {
            color: "#f7f9ff"
        }
    })
}

onMounted(() => {
    graphInit()
})

</script>