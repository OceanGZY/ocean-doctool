<!--
 * @Author: OCEAN.GZY
 * @Date: 2023-10-24 11:37:10
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-10-24 16:28:23
 * @FilePath: /ocean-doctool/src/views/mindflow/graph-tool/configpanel/ConfigPanel.vue
 * @Description: 注释信息
-->
<template>
  <div class="config">
    <config-grid v-show="type === 'grid'" />
    <config-node v-show="type === 'node'" />
    <config-edge v-show="type === 'edge'" />
  </div>
</template>
  
<script lang="ts">
import ConfigGrid from './configgrid/index.vue';
import ConfigNode from './confignode/index.vue';
import ConfigEdge from './configedge/index.vue'
import FlowGraph from '../../graph-core/index';
import { defineComponent, ref, provide } from 'vue';
import { globalGridAttr } from '../../graph-model/Global';

export default defineComponent({
  name: 'Index',
  components: {
    ConfigGrid,
    ConfigNode,
    ConfigEdge,
  },
  setup() {
    const type = ref('grid');
    const id = ref('');
    // 待优化
    const boundEvent = function (): void {
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

    return {
      type,
      id,
    };
  },
});
</script>
  
<style scoped></style>
  