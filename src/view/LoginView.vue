<script setup lang="ts">
import { ElMessage } from "element-plus";
import { ref } from "vue";
import { useUserStore } from "../store/user";

let loginForm = ref({
  username: "",
  password: "",
  captcha: "",
});
let imgVisible = ref(false);
let captchaImg = ref(""); // 创建新的响应式引用
const userStore = useUserStore();
const getCaptcha = (username: string) => {
  console.log(username);
  if (username === "") {
    ElMessage({
      type: "info",
      message: "请先填写账号信息",
    });
  } else {
    userStore.getCaptcha(username).then((response) => {
      let blob = response.data;
      let imgUrl = window.URL.createObjectURL(blob);
      // 更新captchaImg的值
      captchaImg.value = imgUrl;
    });
    imgVisible.value = true;
  }
};
</script>
<!-- Login View -->
<template>
  <div id="body">
    <div id="border">
      <el-form
        label-position="top"
        style="
          max-width: 600px;
          display: flex;
          flex-direction: column;
          align-items: center;
        "
        status-icon
        label-width="auto"
        class="demo-ruleForm"
      >
        <el-form-item>
          <h1>登录</h1>
        </el-form-item>
        <el-form-item label="用户名 :">
          <el-input
            placeholder="用户名"
            v-model="loginForm.username"
            style="width: 200px"
          />
        </el-form-item>
        <el-form-item label="密码 :" prop="checkPass">
          <el-input
            placeholder="密码"
            type="password"
            autocomplete="off"
            v-model="loginForm.password"
            style="width: 200px"
          />
        </el-form-item>
        <el-form-item label="验证码 :" prop="age">
          <el-input
            placeholder="验证码"
            v-model="loginForm.captcha"
            style="width: 200px"
          />
        </el-form-item>
        <el-form-item style="display: flex; flex-wrap: nowrap">
          <img
            v-if="imgVisible"
            id="captcha"
            :src="captchaImg"
            alt="验证码"
            style="width: 120px; height: 35px"
          />
          <button
            @click="getCaptcha(loginForm.username)"
            style="
              width: 80px;
              height: 35px;
              margin-left: 10px;
              font-size: 10px;
            "
          >
            获取验证码
          </button>
        </el-form-item>
        <el-form-item id="items">
          <button style="padding: 10px" @click="userStore.userLogin(loginForm)">
            登录
          </button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped lang="scss">
#body {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
}
#border {
  border-radius: 50px;
  background-color: #3434343e;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  padding: 50px;
  width: 400px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    color: rgb(255, 255, 255);
    border: 0px;
    border-radius: 5px;
    background-image: linear-gradient(to top, #6a85b6 0%, #bac8e0 100%);
    transition: all 0.5s;
    &:hover {
      transform: scale(1.05);
      cursor: pointer;
    }
  }
}
#border h1 {
  color: rgb(0, 0, 0);
  width: 100%;
  text-align: center;
}
</style>
