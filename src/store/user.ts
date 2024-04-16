import { ElMessage } from "element-plus";
import { defineStore } from "pinia";
import { ref } from "vue";

import { forgetPawwsordForm, loginForm } from "../api/model";
import {
  ForgetPasswordAPI,
  getCaptchaAPI,
  userLoginAPI,
  userLogoutAPI,
} from "../api/type";
import router from "../router";

export const useUserStore = defineStore("user", () => {
  // 获取验证码
  const captchaImage = ref(null);
  const getCaptcha = async (name: string) => {
    try {
      const captcha = await getCaptchaAPI(name);
      ElMessage({
        type: "success",
        message: "验证码已获取",
      });
      return captcha;
    } catch (error) {
      console.log(error);
    }
  };
  // 用户登录
  const userLogin = async (form: loginForm) => {
    try {
      const res = (await userLoginAPI(form)).data;
      if (res.data) {
        localStorage.setItem("token", res.data.token);
        router.push("/dashboard");
        setTimeout(() => {
          ElMessage({
            type: "success",
            message: "账号登录成功",
          });
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // 用户登出
  const userLogout = async () => {
    try {
      await userLogoutAPI();
      localStorage.removeItem("token");
      router.push("/login");
      setTimeout(() => {
        ElMessage({
          type: "success",
          message: "账号登出",
        });
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
  // 忘记密码
  const ForgetPassword = async (form: forgetPawwsordForm) => {
    try {
      await ForgetPasswordAPI(form);
      ElMessage({
        type: "success",
        message: "密码重置成功",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return {
    captchaImage,
    getCaptcha,
    userLogin,
    userLogout,
    ForgetPassword,
  };
});
