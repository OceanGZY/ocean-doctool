<!--
 * @Author: OCEAN.GZY
 * @Date: 2023-10-23 10:08:10
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-11-01 11:16:42
 * @FilePath: /ocean-doctool/src/views/home/Home.vue
 * @Description: 注释信息
-->
<script setup lang="ts">
</script>

<template>
  <div class="home">
    <div class="content">
      <div class="title">
        <div class="head">OCEAN DOC TOOL</div>
        <div class="desc">一个聚合的文档工具～</div>
        <div class="desc">OCEAN.GZY©️2023</div>
      </div>

      <div class="btn-groups">
        <router-link class="btn" to="/mindflow">MindFlow</router-link>
        <router-link class="btn" to="/minddoc">MindDOC</router-link>
        <router-link class="btn" to="/mindppt">MindPPT</router-link>
        <router-link class="btn" to="/mindmap">MindMap</router-link>
      </div>
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

  .content {
    display: flex;
    height: 80%;
    width: 60%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #000;
    border-radius: 5px;
    box-shadow: #000 0px 0px 10px;
    backdrop-filter: blur(10px);

    .title {
      line-height: 2;
      text-align: center;
      .head {
        font-size: 40pt;
        font-weight: bold;
      }

    }

    .btn-groups {
      display: flex;
      width: 60%;
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
    }
  }

}
</style>