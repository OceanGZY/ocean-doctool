<!--
 * @Author: OCEAN.GZY
 * @Date: 2023-10-23 10:08:10
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-10-27 20:01:38
 * @FilePath: /ocean-doctool/src/views/home/Home.vue
 * @Description: 注释信息
-->
<script setup lang="ts">
</script>

<template>
  <div class="home">
    <div class="btn-groups">
      <router-link class="btn" to="/mindflow">MindFlow</router-link>
      <router-link class="btn" to="/mindppt">MindPPT</router-link>
      <router-link class="btn" to="/mindmap">MindMap</router-link>
    </div>
  </div>
</template>

<style scoped lang="less">
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: url("../../assets/bg.bmp") no-repeat center center;
  background-size: cover;


  .btn-groups {
    display: flex;
    height: 80%;
    width: 60%;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #000;
    border-radius: 5px;
    box-shadow: #000 0px 0px 10px;
    backdrop-filter: blur(10px);

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
  }
}
</style>