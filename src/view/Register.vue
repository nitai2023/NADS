<script setup lang="ts">
import { ref } from "vue";
let username = ref("");
let password = ref("");
let label = ref("");
</script>
<template>
  <div id="body">
    <div id="border">
      <el-form
        label-position="top"
        style="max-width: 600px"
        status-icon
        label-width="auto"
        class="demo-ruleForm"
      >
        <el-form-item>
          <h1>注册</h1>
        </el-form-item>
        <el-form-item label="用户名 :">
          <el-input v-model="username" style="width: 230px" />
        </el-form-item>
        <el-form-item label="密码 :" prop="checkPass">
          <el-input
            type="password"
            autocomplete="off"
            v-model="password"
            style="width: 230px"
          />
        </el-form-item>
        <el-form-item label="验证码 :" prop="age">
          <el-input v-model="label" style="width: 230px" />
        </el-form-item>
        <el-form-item id="items">
          <el-button type="primary" class="item" style="width: 230px"
            >注册</el-button
          >
        </el-form-item>
        <el-form-item>
          <RouterLink to="/login">
            <el-button type="success" class="item" style="width: 230px"
              >登录</el-button
            ></RouterLink
          >
        </el-form-item>
        <el-form-item>
          <RouterLink to="/"><p>回到首页</p></RouterLink>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped lang="scss">
#body {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(235, 235, 235);
}
#border {
  border: 2px solid rgb(107, 154, 255);
  border-radius: 50px;
  padding: 50px;
  width: 400px;
  height: auto;
  background-color: rgb(237, 246, 255);
  display: flex;
  justify-content: center;
  align-items: center;
}
#border h1 {
  color: rgb(107, 154, 255);
  width: 100%;
  text-align: center;
}
a {
  width: 100%;
  text-decoration: none;
  text-align: center;
}
</style>
