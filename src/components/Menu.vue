<script lang="ts" setup>
import { ref } from "vue";

import { useUserStore } from "../store/user";

const isCollapse = ref(false);

const userStore = useUserStore();

// 登出账号
const logout = async () => {
  await userStore.userLogout();
};
</script>
<!-- Menu -->
<template>
  <div class="menu-container menu">
    <h2
      style="
        margin: 0;
        text-align: center;
        padding: 20px;
        color: rgb(0, 171, 114);
      "
    >
      菜单栏
    </h2>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      style="background-color: transparent"
      :collapse="isCollapse"
      text-color="rgb(0, 203, 135)"
      active-text-color="rgb(255, 255, 255)"
      :router="true"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><Aim /></el-icon>
          <span>定向资产</span>
        </template>
        <el-menu-item index="1-1" route="/dashboard/targetedasset/nodemanage">
          节点管理</el-menu-item
        >
        <el-menu-item
          index="1-2"
          route="/dashboard/targetedasset/taskmanagement"
          >任务管理</el-menu-item
        >
        <el-menu-item index="1-3" route="/dashboard/targetedasset/goaldetail"
          >目标详情
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item index="2" route="/dashboard/assetmap">
        <el-icon><Money /></el-icon>
        <template #title>资产查询</template>
      </el-menu-item>
      <el-menu-item index="3" route="/dashboard/vulnerability">
        <el-icon><Search /></el-icon>
        <template #title>漏洞查询</template>
      </el-menu-item>
      <el-menu-item index="4" route="/dashboard/usermanagement">
        <el-icon><User /></el-icon>
        <template #title>用户管理</template>
      </el-menu-item>
      <el-menu-item index="5" route="/dashboard/aptmanagement">
        <el-icon>
          <lock />
        </el-icon>
        <template #title>APT管理</template>
      </el-menu-item>
    </el-menu>
    <div
      style="
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
      "
    >
      <el-popconfirm
        width="220"
        confirm-button-text="OK"
        cancel-button-text="No, Thanks"
        :icon="InfoFilled"
        icon-color="#626AEF"
        title="Are you sure to logout?"
        @confirm="() => logout()"
      >
        <template #reference>
          <el-button color="rgb(0, 203, 135)" :dark="isDark"
            >登出账号</el-button
          >
        </template>
      </el-popconfirm>
    </div>
  </div>
</template>

<style>
.menu {
  height: 100vh;
  background-color: rgb(31, 31, 31);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: rgba(45, 45, 45, 0.35) 0px 5px 15px;
  .el-menu--inline {
    background-color: rgb(53, 52, 52);
  }
}
.menu-container {
  .menu-collapse {
    display: flex;
    justify-content: center;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    --text-color: rgb(166, 166, 166);
    h2 {
      width: 100%;
      color: rgb(0, 203, 135);
      text-align: center;
    }
    .el-menu-item {
      display: flex;
    }
  }
}
</style>
