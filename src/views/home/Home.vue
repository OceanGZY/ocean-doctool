<!--
 * @Author: OCEAN.GZY
 * @Date: 2023-10-23 10:08:10
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-10-26 23:44:53
 * @FilePath: /ocean-doctool/src/views/home/Home.vue
 * @Description: 注释信息
-->
<script setup lang="ts">
</script>

<template>
  <div class="btn-groups">
    <router-link class="btn" to="/mindflow">MindFlow</router-link>
    <router-link class="btn" to="/mindppt">MindPPT</router-link>
    <router-link class="btn" to="/mindmap">MindMap</router-link>
  </div>
</template>

<style scoped lang="less">
.btn-groups {
  display: flex;
  width: 100%;
  height: calc( 100%);
  justify-content: space-around;
  align-items: center;

  .btn {
    width: 100px;
    height: 40px;
    line-height: 40px;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
    text-align: center;
    font-size: 14px;

    &:hover {
      background-color: #fff;
      color: #000;
    }
  }
}</style>