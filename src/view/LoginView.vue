<script setup lang="ts">
import { ElMessage } from "element-plus";
import { ref } from "vue";
import { useUserStore } from "../store/user";

let captchaImg = ref("");
let loginForm = ref({
  username: "",
  password: "",
  captcha: "",
});
const forgetPawwsordForm = ref({
  confirmPassword: "",
  newPassword: "",
  username: "",
});

const seakPasswordVisible = ref(false);
let imgVisible = ref(false);

const userStore = useUserStore();

// 获取验证码
const getCaptcha = (username: string) => {
  console.log(username);
  if (username === "") {
    ElMessage({
      type: "info",
      message: "请先填写用户名信息",
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

// 登录
const login = async () => {
  if (
    loginForm.value.username === "" ||
    loginForm.value.password === "" ||
    loginForm.value.captcha === ""
  ) {
    ElMessage({
      type: "info",
      message: "请先完整填写信息",
    });
  } else {
    userStore.userLogin(loginForm.value);
  }
};

// 找回密码
const forgetPassword = async (forgetPawwsordForm: forgetPawwsordForm) => {
  await userStore.ForgetPassword(forgetPawwsordForm);
  seakPasswordVisible.value = false;
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
          <el-button @click="login">登录账号</el-button>
          <el-button
            color="#626aef"
            :dark="isDark"
            style="margin-left: 10px"
            @click="seakPasswordVisible = true"
            >忘记密码</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
  <el-dialog v-model="seakPasswordVisible" title="找回密码" width="500">
    <div>
      <el-form
        label-position="top"
        style="max-width: 600px; border-radius: 15px"
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
              style="width: 130px; background-color: rgb(0, 171, 114)"
              @click="forgetPassword(forgetPawwsordForm)"
              >修改</el-button
            >
          </el-form-item>
        </div>
      </el-form>
    </div>
  </el-dialog>
</template>

<style scoped lang="scss">
#body {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to right, #434343 0%, black 100%);
  display: flex;
  justify-content: center;
  align-items: center;
}
#border {
  border-radius: 50px;
  background-color: rgba(90, 90, 90, 0.462);
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
    background-color: rgb(0, 171, 114);

    transition: all 0.5s;
    &:hover {
      transform: scale(1.05);
      cursor: pointer;
    }
  }
}
#border h1 {
  color: rgb(0, 171, 114);
  width: 100%;
  text-align: center;
}
</style>
