<!--
 * @Author: OCEAN.GZY
 * @Date: 2023-10-22 17:39:29
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-10-23 20:20:43
 * @FilePath: /ocean-doctool/src/views/mindflow/MF.vue
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
        grid: {
            size: 10,
            visible: true,
            type: "mesh",
            args: {
                color: "#efefef",
                thickness: 1,
                factor: 10
            }
        },
        autoResize: true,
        interacting: {
            edgeLabelMovable: true
        },
        background: {
            color: "#f7f9ff"
        }
    })
    graph.fromJSON(data)

    const stencil = new Stencil({
        title: "Stencil",
        target: graph,
        search: true,
        collapsable: true,
        stencilGraphWidth: 200,
        stencilGraphHeight: 180,
        groups: [
            {
                name: 'G1',
                title: 'Group1',
            },
            {
                name: 'G2',
                title: 'Group2',
            }
        ],
    })
    document.getElementById('mindflow-stencil')?.appendChild(stencil.container)

    const r = new Rect({
        x: 100,
        y: 100,
        width: 100,
        height: 100,
        fill: '#000',
        stroke: '#000',
        strokeWidth: 2,
        radius: 10,
        radiusBorder: '#000',
        radiusBorderWidth: 2,
        radiusBorderDasharray: [5, 5],
        radiusBorderDashoffset: 0,
    })

    const c = new Circle({
        width: 60,
        height: 60,
        attrs: {
            circle: { fill: '#000', stroke: '#000', strokeWidth: 2, r: 30 },
            text: {
                text: 'Circle', fill: '#000', fontSize: 12, fontWeight: 'bold'
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