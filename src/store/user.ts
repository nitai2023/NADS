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
    const captcha = await getCaptchaAPI(name);
    return captcha;
  };
  // 用户登录
  const userLogin = async (form: loginForm) => {
    const res = (await userLoginAPI(form)).data;
    if (res.data) {
      localStorage.setItem("token", res.data.token);
      router.push("/dashboard");
    }
  };
  // 用户登出
  const userLogout = async () => {
    await userLogoutAPI();
    localStorage.removeItem("token");
    router.push("/login");
  };
  // 忘记密码
  const ForgetPassword = async (form: forgetPawwsordForm) => {
    await ForgetPasswordAPI(form);
  };
  return {
    captchaImage,
    getCaptcha,
    userLogin,
    userLogout,
    ForgetPassword,
  };
});
