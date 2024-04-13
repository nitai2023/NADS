<script setup lang="ts">
import { ref } from "vue";
let username = ref("");
let password = ref("");
let label = ref("");
</script>
<template>
  <div id="border">
    <el-form
      style="max-width: 600px"
      status-icon
      label-width="auto"
      class="demo-ruleForm"
    >
      <el-form-item>
        <h1>网络资产探测系统</h1>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="username" />
      </el-form-item>
      <el-form-item label="密码" prop="checkPass">
        <el-input type="password" autocomplete="off" v-model="password" />
      </el-form-item>
      <el-form-item label="验证码" prop="age">
        <el-input v-model="label" style="width: 130px" />
      </el-form-item>
      <el-form-item>
        <el-button type="success">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
#border {
  border: 1px solid black;
  border-radius: 10px;
  padding: 100px;
}
#border h1 {
  color: green;
}
</style>
