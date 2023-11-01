<!--
 * @Author: OCEAN.GZY
 * @Date: 2023-08-04 13:54:38
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-10-31 10:29:32
 * @FilePath: /ocean-doctool/src/views/mindmap/map-core/pages/Edit/components/NodeHyperlink.vue
 * @Description: 注释信息
-->
<template>
  <el-dialog class="nodeDialog" v-model="dialogVisible" :title="$t('nodeHyperlink.title')">
    <div class="item">
      <span class="name">{{ $t('nodeHyperlink.link') }}</span>
      <el-input v-model="link" size="small" placeholder="http://xxxx.com/"></el-input>
    </div>
    <div class="item">
      <span class="name">{{ $t('nodeHyperlink.name') }}</span>
      <el-input v-model="linkTitle" size="small" @keyup.native.stop></el-input>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel">{{ $t('dialog.cancel') }}</el-button>
        <el-button type="primary" @click="confirm">{{ $t('dialog.confirm') }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import bus from '@/views/mindmap/map-core/utils/bus.js'
/**
 * @Author: OceanGZY
 * @Desc: 节点超链接内容设置
 */
const dialogVisible = ref(false)
const link = ref('')
const linkTitle = ref('')
const activeNodes = ref([])

onMounted(() => {
  bus.on('node_active', args => {
    activeNodes.value = args[1]
    if (activeNodes.value.length > 0) {
      let firstNode = activeNodes.value[0]
      link.value = firstNode.getData('hyperlink')
      linkTitle.value = firstNode.getData('hyperlinkTitle')
    } else {
      link.value = ''
      linkTitle.value = ''
    }
  })
  bus.on('showNodeLink', () => {
    activeNodes.value[0].mindMap.keyCommand.pause()
    bus.emit('startTextEdit')
    dialogVisible.value = true
  })
})

/**
 * @Author: OceanGZY
 * @Desc: 取消
 */
const cancel = () => {
  dialogVisible.value = false
  activeNodes.value[0].mindMap.keyCommand.recovery()
  bus.emit('endTextEdit')
}

/**
 * @Author: OceanGZY
 * @Desc:  确定
 */
const confirm = () => {
  activeNodes.value.forEach(node => {
    if (!link.value.startsWith('http://') && !link.value.startsWith('https://') && !link.value.startsWith('//')) {
      link.value = `//${link.value}`
    }
    node.setHyperlink(link.value, linkTitle.value)
    cancel()
  })
}
</script>

<script>
export default {
  name: 'NodeHyperlink'
}
</script>

<style lang="less" scoped>
.nodeDialog {
  .item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .name {
      display: block;
      width: 50px;
    }
  }
}
</style>
