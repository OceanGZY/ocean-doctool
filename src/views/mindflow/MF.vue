<!--
 * @Author: OCEAN.GZY
 * @Date: 2023-10-23 23:36:40
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-10-26 23:45:38
 * @FilePath: /ocean-doctool/src/views/mindflow/MF.vue
 * @Description: 注释信息
-->
<template>
  <div class="wrap">
    <div class="header">
      <span>OceanFlow,专为你定制的流程设计器～</span>
      <router-link to="/">回首页</router-link>
    </div>
    <div class="content">
      <!--左侧工具栏-->
      <div id="stencil" class="sider"></div>
      <div class="panel">
        <!--流程图工具栏-->
        <div class="toolbar">
          <tool-bar v-if="isReady" />
        </div>
        <!--流程图画板-->
        <div id="container" class="container"></div>
      </div>
      <!--右侧工具栏-->
      <div class="config">
        <config-panel v-if="isReady" />
      </div>
    </div>
  </div>
</template>
  
<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import FlowGraph from './graph-core';
import ToolBar from './graph-tool/ToolBar/ToolBar.vue';
import ConfigPanel from './graph-tool/ConfigPanel/ConfigPanel.vue'
import './global.css'
import './mf.less'



const getContainerSize = () => {
  return {
    width: document.body.offsetWidth - 400,
    height: document.body.offsetHeight - 100,
  };
}
const isReady = ref(false)

const initGraph = () => {
  const graph = FlowGraph.init();
  isReady.value = true;
  const resizeFn = () => {
    const { width, height } = getContainerSize();
    graph.resize(width, height);
  }
  resizeFn();
  window.addEventListener('resize', resizeFn);
  () => {
    window.removeEventListener('resize', resizeFn)
  }
};

onMounted(() => {
  initGraph();
})
</script>
  
<style lang="less"  scoped></style>
  