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
    const token = await userLoginAPI(form);
    let d = new Date();
    d.setTime(d.getTime() + 3 * 60 * 60 * 1000); // 3小时毫秒计时
    let expires = "expires=" + d.toUTCString();
    document.cookie = `token=${token}; ${expires}; path=/`;
    router.push("/dashboard");
  };
  const userLogout = async () => {
    await userLogoutAPI();
  };
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
