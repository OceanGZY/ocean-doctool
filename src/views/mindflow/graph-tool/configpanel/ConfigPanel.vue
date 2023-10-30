<!--
 * @Author: OCEAN.GZY
 * @Date: 2023-10-24 11:37:10
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-10-30 22:26:27
 * @FilePath: /ocean-doctool/src/views/mindflow/graph-tool/configpanel/ConfigPanel.vue
 * @Description: 注释信息
-->
<template>
  <div class="config-tool">
    <conf-grid v-show="type === 'grid'" />
    <conf-node v-show="type === 'node'" />
    <conf-edge v-show="type === 'edge'" />
  </div>
</template>
  
<script lang="ts" setup>
import FlowGraph from '../../graph-core/index';
import { ref, provide } from 'vue';
import { globalGridAttr } from '../../graph-model/Global';
import './panel.less'
import ConfEdge  from "@/views/mindflow/graph-tool/configpanel/ConfEdge.vue"
import ConfNode from "@/views/mindflow/graph-tool/configpanel/ConfNode.vue"
import ConfGrid  from "@/views/mindflow/graph-tool/configpanel/ConfGrid.vue"

const type = ref('grid');
const id = ref('');
// 待优化
const boundEvent = () => {
  const { graph } = FlowGraph;
  graph.on('blank:click', () => {
    type.value = 'grid';
  });
  graph.on('cell:click', ({ cell }) => {
    type.value = cell.isNode() ? 'node' : 'edge';
    id.value = cell.id;
  });
};
boundEvent();
provide('globalGridAttr', globalGridAttr);
provide('id', id);


</script>
  
<style lang="less" scoped></style>
  