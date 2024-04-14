<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "../store/user";
let loginForm = ref({
  username: "",
  password: "",
  captcha: "",
});
let captchaImg = ref(""); // 创建新的响应式引用
const userStore = useUserStore();
const getCaptcha = (username: string) => {
  console.log(username);
  userStore.getCaptcha(username).then((response) => {
    let blob = response.data;
    let imgUrl = window.URL.createObjectURL(blob);
    // 更新captchaImg的值
    captchaImg.value = imgUrl;
  });
};
</script>
<!-- Login View -->
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
          <h1>登录</h1>
        </el-form-item>
        <el-form-item label="用户名 :">
          <el-input v-model="loginForm.username" style="width: 230px" />
        </el-form-item>
        <el-form-item label="密码 :" prop="checkPass">
          <el-input
            type="password"
            autocomplete="off"
            v-model="loginForm.password"
            style="width: 230px"
          />
        </el-form-item>
        <el-form-item label="验证码 :" prop="age">
          <el-input v-model="loginForm.captcha" style="width: 230px" />
          <img id="captcha" :src="captchaImg" alt="验证码" />
          <el-button type="primary" @click="getCaptcha(loginForm.username)"
            >获取验证码</el-button
          >
        </el-form-item>
        <el-form-item id="items">
          <el-button
            type="success"
            class="item"
            style="width: 230px"
            @click="userStore.userLogin(loginForm)"
            >登录</el-button
          >
        </el-form-item>
        <el-form-item>
          <RouterLink to="/register"
            ><el-button type="primary" style="width: 230px"
              >注册</el-button
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
  background-image: linear-gradient(135deg, #f5f7fa 0%, #b1bfd5 100%);

  display: flex;
  justify-content: center;
  align-items: center;
}
#border {
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  padding: 50px;
  width: 400px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
#border h1 {
  color: rgb(79, 79, 79);
  width: 100%;
  text-align: center;
}

a {
  width: 100%;
  text-decoration: none;
  text-align: center;
}
</style>
