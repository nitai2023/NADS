<script lang="ts" setup>
// import {
//   Document,
//   Menu as IconMenu,
//   Location,
//   Setting,
// } from "@element-plus/icons-vue";
import { ref } from "vue";

const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
<!-- Menu -->
<template>
  <div class="menu-container">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      text-color=" #6F6F6F"
      active-text-color="rgb(57, 159, 72)"
      :router="true"
      style="height: calc(100% - 52px)"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item>
        <template #title><h2>菜单栏</h2></template>
      </el-menu-item>
      <el-menu-item index="/dashboard/scantaskmanagement">
        <el-icon><location /></el-icon>
        <template #title>
          <span>扫描任务管理</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/dashboard/assetquery">
        <el-icon><Menu /></el-icon>
        <template #title>资产查询</template>
      </el-menu-item>
      <el-menu-item index="/dashboard/vulnerability">
        <el-icon><document /></el-icon>
        <template #title>漏洞查询</template>
      </el-menu-item>
      <el-menu-item index="/dashboard/usermanagement">
        <el-icon><setting /></el-icon>
        <template #title>用户管理</template>
      </el-menu-item>
      <el-menu-item>
        <el-button type="danger">登出</el-button>
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
    h2 {
      width: 100%;
      color: green;
      text-align: center;
    }
    .el-menu-item {
      display: flex;
    }
  }
}
</style>
