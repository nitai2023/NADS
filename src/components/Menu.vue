<script lang="ts" setup>
import { ElMessage } from "element-plus";
import { ref } from "vue";
import { forgetPawwsordForm } from "../api/model";

import { useUserStore } from "../store/user";

const isCollapse = ref(false);
const userStore = useUserStore();
const seakPasswordVisible = ref(false);
const forgetPawwsordForm = ref({
  confirmPassword: "",
  newPassword: "",
  username: "",
});

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

// 登出账号
const logout = async () => {
  await userStore.userLogout();
  ElMessage({
    type: "success",
    message: "账号退出成功",
  });
};

// 找回密码
const forgetPassword = async (forgetPawwsordForm: forgetPawwsordForm) => {
  await userStore.ForgetPassword(forgetPawwsordForm);
  ElMessage({
    type: "success",
    message: "密码重置成功",
  });
  seakPasswordVisible.value = false;
};
</script>

<template>
  <div class="menu-container menu">
    <h2 style="margin: 0; text-align: center; padding: 10p; color: white">
      菜单栏
    </h2>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      style="background-color: transparent"
      :collapse="isCollapse"
      text-color=" rgb(89, 0, 161)"
      active-text-color="rgb(255, 255, 255)"
      :router="true"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="1" route="/dashboard/taskmanagement">
        <el-icon><Menu /></el-icon>
        <template #title>扫描任务管理</template>
      </el-menu-item>
      <el-menu-item index="2" route="/dashboard/assetquery">
        <el-icon><Menu /></el-icon>
        <template #title>资产查询</template>
      </el-menu-item>
      <el-menu-item index="3" route="/dashboard/vulnerability">
        <el-icon><document /></el-icon>
        <template #title>漏洞查询</template>
      </el-menu-item>
      <el-menu-item index="4" route="/dashboard/usermanagement">
        <el-icon><setting /></el-icon>
        <template #title>用户管理</template>
      </el-menu-item>
    </el-menu>
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
        <el-button type="danger" text bg>登出账号</el-button>
      </template>
    </el-popconfirm>
    <el-button type="primary" @click="seakPasswordVisible = true" text bg
      >忘记密码</el-button
    >
  </div>
  <el-dialog v-model="seakPasswordVisible" title="找回密码" width="500">
    <div id="border">
      <el-form
        label-position="top"
        style="max-width: 600px"
        :model="forgetPawwsordForm"
        status-icon
        label-width="auto"
        class="demo-ruleForm"
      >
        <div class="form-row">
          <el-form-item label="用户名 :">
            <el-input v-model="forgetPawwsordForm.username" />
          </el-form-item>
          <el-form-item label="新密码 :">
            <el-input v-model="forgetPawwsordForm.newPassword" />
          </el-form-item>
        </div>
        <div class="form-row">
          <el-form-item label="确认密码:">
            <el-input v-model="forgetPawwsordForm.confirmPassword" />
          </el-form-item>
        </div>
        <div class="form-row">
          <el-form-item>
            <el-button
              type="primary"
              class="item"
              style="width: 130px"
              @click="forgetPassword(forgetPawwsordForm)"
              >修改</el-button
            >
          </el-form-item>
        </div>
      </el-form>
    </div>
  </el-dialog>
</template>

<style>
.menu {
  height: 100vh;
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
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
      color: rgb(255, 255, 255);
      text-align: center;
    }
  }
}
</style>
