<!--
 * @Author: OCEAN.GZY
 * @Date: 2023-10-22 17:39:29
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-10-23 23:20:01
 * @FilePath: \ocean-doctool\src\views\mindflow\MF.vue
 * @Description: 注释信息
-->
<template>
    <div class="mindflow-wrap">
        <div class="mindflow-stencil" id="mindflow-stencil"></div>
        <div class="mindflow" id="mindflow"></div>
    </div>
</template>

<script setup lang="ts">
import { Graph, Shape } from "@antv/x6"
import { Stencil } from "@antv/x6-plugin-stencil"
import { onMounted } from "vue"

const data = {}
const { Rect, Circle } = Shape

let graph: Graph


const graphInit = () => {
    graph = new Graph({
        container: document.getElementById("mindflow") as HTMLElement,
        width: 1000,
        height: 765,
        grid: true,
        mousewheel: {
            enabled: true,
            zoomAtMousePosition: true,
            modifiers: 'ctrl',
            minScale: 0.5,
            maxScale: 3
        },
        background: {
            color: "#f7f9ff"
        },
        autoResize: true,
        interacting: {
            edgeLabelMovable: true
        },
        highlighting: {
            magnetAdsorbed: {
                name: 'stroke',
                args: {
                    attrs: {
                        fill: '#5F95FF',
                        stroke: '#5F95FF',
                    },
                },
            },
        },
    })
    graph.fromJSON(data)

    const stencil = new Stencil({
        title: "组件",
        target: graph,
        search: true,
        collapsable: true,
        stencilGraphWidth: 200,
        stencilGraphHeight: 180,
        groups: [
            {
                name: 'G1',
                title: '流程图',
            },
            {
                name: 'G2',
                title: '时序图',
            }
        ],
    })
    document.getElementById('mindflow-stencil')?.appendChild(stencil.container)

    const r = new Rect({
        width: 36,
        height: 36,
        stroke: '#000',
        strokeWidth: 1,
    })
    const c = new Circle({
        width: 40,
        height: 40,
        attrs: {
            circle: { fill: '#fff', stroke: '#000', strokeWidth: 2, r: 30 },
            text: {
                text: '连接', fill: '#000', fontSize: 12,
            }
        }
    })

    stencil.load([r, c], "G1")
    stencil.load([r, c], "G2")
}

onMounted(() => {
    graphInit()
})

</script>

<style scoped>
.mindflow-wrap {
    font-family: sans-serif;
    display: flex;
}

.mindflow-stencil {
    width: 250px;
    border: 1px solid #ccc;
    position: relative;
}
</style>