<template>
    <div class="mindmap">
        <div class="header">
            <span>OceanMindMap,专为你定制的脑图工具～</span>
            <router-link to="/">回首页</router-link>
        </div>
        <div id="mindMapContainer" class="mindMapContainer"></div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import "./map-core/index"
import "./mm.less"
import OceanMindMap from "./map-core/index";

const initMindMap = () => {
    const mindmap = OceanMindMap.init()
    mindmap.setFullData({
        "layout": "logicalStructure",
        "root": {
            "data": {
                "text": "根节点",
                "expand": true,
                "isActive": false
            },
            "children": [{
                "data": {
                    "text": "二级节点",
                    "generalization": {
                        "text": "概要",
                        "expand": true,
                        "isActive": false
                    },
                    "expand": true,
                    "isActive": false
                },
                "children": [{
                    "data": {
                        "text": "分支主题",
                        "expand": true,
                        "isActive": false
                    },
                    "children": []
                }, {
                    "data": {
                        "text": "分支主题",
                        "expand": true,
                        "isActive": false
                    },
                    "children": []
                }, {
                    "data": {
                        "text": "<a href='http://lxqnsys.com/' target='_blank'>理想去年实验室</a>",
                        "richText": true
                    },
                    "children": []
                }]
            }]
        },
        "theme": {
            "template": "classic4",
            "config": {}
        },
        "view": {
            "transform": {
                "scaleX": 1,
                "scaleY": 1,
                "shear": 0,
                "rotate": 0,
                "translateX": 0,
                "translateY": 0,
                "originX": 0,
                "originY": 0,
                "a": 1,
                "b": 0,
                "c": 0,
                "d": 1,
                "e": 0,
                "f": 0
            },
            "state": {
                "scale": 1,
                "x": 0,
                "y": 0,
                "sx": 0,
                "sy": 0
            }
        },
        "config": {}


    })
}

onMounted(() => {
    try {
        initMindMap()
    } catch (e) {
        console.log(e)
    }
})
</script>

<style lang="less" scoped></style>