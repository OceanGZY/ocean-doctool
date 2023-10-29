<template>
    <div class="editContainer">
        <div class="mindMapContainer" ref="mindMapContainer"></div>
        <Count :mindMap="mindMap" v-if="!isZenMode"></Count>
        <Navigator :mindMap="mindMap"></Navigator>
        <NavigatorToolbar :mindMap="mindMap" v-if="!isZenMode"></NavigatorToolbar>
        <OutlineSidebar :mindMap="mindMap"></OutlineSidebar>
        <Style v-if="!isZenMode"></Style>
        <BaseStyle :data="mindMapData" :mindMap="mindMap"></BaseStyle>
        <Theme v-if="mindMap" :mindMap="mindMap"></Theme>
        <Structure :mindMap="mindMap"></Structure>
        <ShortcutKey></ShortcutKey>
        <Contextmenu v-if="mindMap" :mindMap="mindMap"></Contextmenu>
        <RichTextToolbar v-if="mindMap" :mindMap="mindMap"></RichTextToolbar>
        <NodeNoteContentShow v-if="mindMap" :mindMap="mindMap"></NodeNoteContentShow>
        <NodeImgPreview v-if="mindMap" :mindMap="mindMap"></NodeImgPreview>
        <SidebarTrigger v-if="!isZenMode"></SidebarTrigger>
        <Search v-if="mindMap" :mindMap="mindMap"></Search>
        <NodeIconSidebar v-if="mindMap" :mindMap="mindMap"></NodeIconSidebar>
        <NodeIconToolbar v-if="mindMap" :mindMap="mindMap"></NodeIconToolbar>
        <OutlineEdit v-if="mindMap" :mindMap="mindMap"></OutlineEdit>
        <Scrollbar v-if="isShowScrollbar && mindMap" :mindMap="mindMap"></Scrollbar>
        <FormulaSidebar v-if="mindMap" :mindMap="mindMap"></FormulaSidebar>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import OceanMindMap from "./map-core/index";
let mindMap: any
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
    mindMap = mindmap
}
onMounted(() => {
    try {
        initMindMap()
    } catch (e) {
        console.log(e)
    }
})
</script>