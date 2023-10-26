<template>
  <div class="bar">
    <a-tooltip placement="bottom">
      <template #title>
        <span>清除 (Cmd + D)</span>
      </template>
      <a-button name="delete" @click="handleClick" class="item-space" size="small">删除 </a-button>
    </a-tooltip>

    <a-tooltip placement="bottom">
      <template #title>
        <span>撤销 (Cmd + Z)</span>
      </template>
      <a-button :disabled="!canUndo" name="undo" @click="handleClick" class="item-space" size="small"> 上一步 </a-button>
    </a-tooltip>

    <a-tooltip placement="bottom">
      <template #title>
        <span>Redo (Cmd + Shift + Z)</span>
      </template>
      <a-button :disabled="!canRedo" name="redo" @click="handleClick" class="item-space" size="small"> 下一步 </a-button>
    </a-tooltip>

    <a-tooltip placement="bottom">
      <template #title>
        <span>复制 (Cmd + Shift + Z)</span>
      </template>
      <a-button name="copy" @click="handleClick" class="item-space" size="small"> 复制 </a-button>
    </a-tooltip>

    <a-tooltip placement="bottom">
      <template #title>
        <span>剪切 (Cmd + X)</span>
      </template>
      <a-button name="cut" @click="handleClick" class="item-space" size="small"> 剪切 </a-button>
    </a-tooltip>

    <a-tooltip placement="bottom">
      <template #title>
        <span>粘贴 (Cmd + V)</span>
      </template>
      <a-button name="paste" @click="handleClick" class="item-space" size="small"> 粘贴 </a-button>
    </a-tooltip>

    <a-tooltip placement="bottom">
      <template #title>
        <span>保存PNG (Cmd + S)</span>
      </template>
      <a-button name="savePNG" @click="handleClick" class="item-space" size="small"> 保存PNG图片 </a-button>
    </a-tooltip>

    <a-tooltip placement="bottom">
      <template #title>
        <span>保存SVG (Cmd + S)</span>
      </template>
      <a-button name="saveSVG" @click="handleClick" class="item-space" size="small"> 保存SVG图片 </a-button>
    </a-tooltip>

    <a-tooltip placement="bottom">
      <template #title>
        <span>打印 (Cmd + P)</span>
      </template>
      <a-button name="print" @click="handleClick" class="item-space" size="small"> 打印 </a-button>
    </a-tooltip>

    <a-tooltip placement="bottom">
      <template #title>
        <span>导出 (Cmd + P)</span>
      </template>
      <a-button name="toJSON" @click="handleClick" class="item-space" size="small"> 保存JSON </a-button>
    </a-tooltip>
  </div>
</template>
  
<script lang="ts" setup>
import { ref, onMounted } from 'vue'; // ref, reactive
import FlowGraph from '../../graph-core';
import { DataUri } from '@antv/x6';

const canUndo = ref(false);
const canRedo = ref(false);

const copy = () => {
  const { graph } = FlowGraph;
  const cells = graph.getSelectedCells();
  if (cells.length) {
    graph.copy(cells);
  }
  return false;
};

const cut = () => {
  const { graph } = FlowGraph;
  const cells = graph.getSelectedCells();
  if (cells.length) {
    graph.cut(cells);
  }
  return false;
};

const paste = () => {
  const { graph } = FlowGraph;
  if (!graph.isClipboardEmpty()) {
    const cells = graph.paste({ offset: 32 });
    graph.cleanSelection();
    graph.select(cells);
  }
  return false;
};

const handleClick = (event: Event) => {
  const { graph } = FlowGraph;
  const name = (event.currentTarget as any).name!;
  switch (name) {
    case 'undo':
      graph.undo();
      break;
    case 'redo':
      graph.redo();
      break;
    case 'delete':
      graph.clearCells();
      break;
    case 'savePNG':
      graph.toPNG(
        (dataUri: string) => {
          // 下载
          DataUri.downloadDataUri(dataUri, 'chartx.png');
        },
        {
          backgroundColor: 'white',
          padding: {
            top: 20,
            right: 30,
            bottom: 40,
            left: 50,
          },
          quality: 1,
        },
      );
      break;
    case 'saveSVG':
      graph.toSVG((dataUri: string) => {
        // 下载
        DataUri.downloadDataUri(DataUri.svgToDataUrl(dataUri), 'chart.svg');
      });
      break;
    case 'print':
      //   graph.printPreview();
      break;
    case 'copy':
      copy();
      break;
    case 'cut':
      cut();
      break;
    case 'paste':
      paste();
      break;
    case 'toJSON':
      console.log(graph.toJSON());
      // graph.fromJSON({cells:[graph.toJSON().cells[0],graph.toJSON().cells[1]]})
      break;
    default:
      break;
  }
};
onMounted(() => {
  const { graph } = FlowGraph;

  graph.on('history:change', () => {
    canUndo.value = graph.canUndo();
    canRedo.value = graph.canRedo();
  });
  graph.bindKey('ctrl+z', () => {
    if (graph.canUndo()) {
      graph.undo();
    }
    return false;
  });
  graph.bindKey('ctrl+shift+z', () => {
    if (graph.canRedo()) {
      graph.redo();
    }
    return false;
  });
  graph.bindKey('ctrl+d', () => {
    graph.clearCells();
    return false;
  });
  graph.bindKey('ctrl+s', () => {
    graph.toPNG((datauri: string) => {
      DataUri.downloadDataUri(datauri, 'chart.png');
    });
    return false;
  });
  graph.bindKey('ctrl+p', () => {
    //   graph.printPreview();
    return false;
  });
  graph.bindKey('ctrl+c', copy);
  graph.bindKey('ctrl+v', paste);
  graph.bindKey('ctrl+x', cut);
})



</script>
  
<style lang="less" scoped>
.bar {
  margin-right: 16px;
}

.item-space {
  margin-left: 16px;
}
</style>
  