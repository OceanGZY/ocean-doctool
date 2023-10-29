<!--
 * @Author: OCEAN.GZY
 * @Date: 2023-10-29 10:33:17
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-10-29 10:53:59
 * @FilePath: \ocean-doctool\src\views\mindmap\components\Toolbar.vue
 * @Description: 注释信息
-->
<template>
    <div class="toolbarContainer" :class="{ isDark: isDark }">
        <div class="toolbar" ref="toolbarRef">
            <!-- 节点操作 -->
            <div class="toolbarBlock">
                <ToolbarNodeBtnList :list="horizontalList"></ToolbarNodeBtnList>
                <!-- 更多 -->
                <el-popover v-model="popoverShow" placement="bottom-end" width="120" trigger="hover" v-if="showMoreBtn"
                    style="margin-left: 20px;">
                    <ToolbarNodeBtnList dir="v" :list="verticalList" @click.native="popoverShow = false">
                    </ToolbarNodeBtnList>
                    <div slot="reference" class="toolbarBtn">
                        <span class="icon iconfont icongongshi"></span>
                        <span class="text">{{ $t('toolbar.more') }}</span>
                    </div>
                </el-popover>
            </div>
            <!-- 导出 -->
            <div class="toolbarBlock">
                <div class="toolbarBtn" @click="createNewLocalFile">
                    <span class="icon iconfont iconxinjian"></span>
                    <span class="text">{{ $t('toolbar.newFile') }}</span>
                </div>
                <div class="toolbarBtn" @click="openLocalFile">
                    <span class="icon iconfont icondakai"></span>
                    <span class="text">{{ $t('toolbar.openFile') }}</span>
                </div>
                <div class="toolbarBtn" @click="saveLocalFile">
                    <span class="icon iconfont iconlingcunwei"></span>
                    <span class="text">{{ $t('toolbar.saveAs') }}</span>
                </div>
                <div class="toolbarBtn" @click="$bus.$emit('showImport')">
                    <span class="icon iconfont icondaoru"></span>
                    <span class="text">{{ $t('toolbar.import') }}</span>
                </div>
                <div class="toolbarBtn" @click="$bus.$emit('showExport')">
                    <span class="icon iconfont iconexport"></span>
                    <span class="text">{{ $t('toolbar.export') }}</span>
                </div>
            </div>
        </div>
        <NodeImage></NodeImage>
        <NodeHyperlink></NodeHyperlink>
        <NodeIcon></NodeIcon>
        <NodeNote></NodeNote>
        <NodeTag></NodeTag>
        <Export></Export>
        <Import></Import>
    </div>
</template>

<script setup lang="ts">
import Import from "./Import.vue"
import NodeImage from "./NodeImage.vue"
import NodeNote from "./NodeNote.vue"
import NodeIcon from "./NodeIcon.vue"
import NodeTag from "./NodeTag.vue"
import NodeHyperlink from "./NodeHyperlink.vue"
import Export from "./Export.vue"


const horizontalList = []
const verticalList = []

const showMoreBtn = true
const popoverShow = false
const list = [
    'back',
    'forward',
    'painter',
    'siblingNode',
    'childNode',
    'deleteNode',
    'image',
    'icon',
    'link',
    'note',
    'tag',
    'summary',
    'associativeLine',
    'formula'
]



</script>


<style lang="less" scoped>
.toolbarContainer {
    &.isDark {
        .toolbar {
            color: hsla(0, 0%, 100%, 0.9);

            .toolbarBlock {
                background-color: #262a2e;
            }

            .toolbarBtn {
                .icon {
                    background: transparent;
                    border-color: transparent;
                }

                &:hover {
                    &:not(.disabled) {
                        .icon {
                            background: hsla(0, 0%, 100%, 0.05);
                        }
                    }
                }

                &.disabled {
                    color: #54595f;
                }
            }
        }
    }

    .toolbar {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        top: 20px;
        width: max-content;
        display: flex;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(26, 26, 26, 0.8);
        z-index: 2;

        .toolbarBlock {
            display: flex;
            background-color: #fff;
            padding: 10px 20px;
            border-radius: 6px;
            box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.06);
            border: 1px solid rgba(0, 0, 0, 0.06);
            margin-right: 20px;
            flex-shrink: 0;

            &:last-of-type {
                margin-right: 0;
            }
        }

        .toolbarBtn {
            display: flex;
            justify-content: center;
            flex-direction: column;
            cursor: pointer;
            margin-right: 20px;

            &:last-of-type {
                margin-right: 0;
            }

            &:hover {
                &:not(.disabled) {
                    .icon {
                        background: #f5f5f5;
                    }
                }
            }

            &.active {
                .icon {
                    background: #f5f5f5;
                }
            }

            &.disabled {
                color: #bcbcbc;
                cursor: not-allowed;
                pointer-events: none;
            }

            .icon {
                display: flex;
                height: 26px;
                background: #fff;
                border-radius: 4px;
                border: 1px solid #e9e9e9;
                justify-content: center;
                flex-direction: column;
                text-align: center;
                padding: 0 5px;
            }

            .text {
                margin-top: 3px;
            }
        }
    }
}
</style>