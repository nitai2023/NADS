<script lang="ts" setup>
// import {
//   Document,
//   Menu as IconMenu,
//   Location,
//   Setting,
// } from "@element-plus/icons-vue";
import { ref } from "vue";

const isCollapse = ref(true);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<template>
  <div class="menu-container">
    <el-radio-group
      class="menu-collapse"
      fill="rgb(57, 159, 72)"
      v-model="isCollapse"
      style="margin-bottom: 20px"
    >
      <el-radio-button :value="false">展开</el-radio-button>
      <el-radio-button :value="true">折叠</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      text-color=" #6F6F6F"
      active-text-color="rgb(57, 159, 72)"
      router="true"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>扫描任务管理</span>
        </template>
        <el-menu-item-group>
          <template #title><span>扫描任务管理</span></template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><Menu /></el-icon>
        <template #title>资产查询</template>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><document /></el-icon>
        <template #title>漏洞查询</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>用户管理</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style>
.menu-container {
  .menu-collapse {
    display: flex;
    justify-content: center;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    --text-color: rgb(57, 159, 72);
  }
}
</style>
