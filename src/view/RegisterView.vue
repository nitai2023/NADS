<script setup lang="ts"></script>
<!-- Register View -->
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
        <div class="form-row">
          <el-form-item label="用户名 :">
            <el-input />
          </el-form-item>
          <el-form-item label="管理员">
            <el-switch />
          </el-form-item>
        </div>
        <div class="form-row">
          <el-form-item label="姓名 :">
            <el-input />
          </el-form-item>

          <el-form-item label="角色名 :">
            <el-input />
          </el-form-item>
        </div>
        <div class="form-row">
          <el-form-item label="密码 :" prop="checkPass">
            <el-input type="password" autocomplete="off" />
          </el-form-item>
          <el-form-item label="验证码 :" prop="age">
            <el-input />
          </el-form-item>
        </div>
        <div class="form-row">
          <el-form-item>
            <RouterLink to="/dashboard">
              <el-button type="primary" class="item" style="width: 130px"
                >注册</el-button
              >
            </RouterLink>
          </el-form-item>
          <el-form-item>
            <RouterLink to="/login">
              <el-button type="success" class="item" style="width: 130px"
                >登录</el-button
              ></RouterLink
            >
          </el-form-item>
        </div>
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
}
#border {
  border: 2px solid rgb(107, 154, 255);
  border-radius: 50px;
  box-shadow: 10px 10px 5px rgb(182, 182, 182);
  padding: 50px;
  width: 500px;
  height: auto;
  background-color: rgb(237, 246, 255);
  display: flex;
  justify-content: space-between;
  // align-items: center;
}
form {
  width: 100%;
}
.form-row {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.el-form-item {
  flex: 1;
  margin-right: 20px;
}
.el-form-item:last-child {
  margin-right: 0;
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
