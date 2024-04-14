import request from ".";
import {
  forgetPawwsordForm,
  loginForm,
  newUserForm,
  pageList,
  updatePawwsordForm,
  updateUserInfoForm,
} from "./model";

// Start 用户相关接口

// 登录
export const userLoginAPI = (form: loginForm) => {
  return request({
    method: "POST",
    url: "/api/login",
    data: form,
  });
};

// 获取验证码
export const getCaptchaAPI = () => {
  return request({
    method: "GET",
    url: "/api/login/captcha",
  });
};

// 登出
export const userLogoutAPI = (token: string) => {
  return request({
    method: "GET",
    url: "/api/logout",
    headers: {
      token,
    },
  });
};

// 忘记密码
export const ForgetPasswordAPI = (form: forgetPawwsordForm) => {
  return request({
    method: "POST",
    url: "/user/forgetPassword",
    data: form,
  });
};

// End 用户相关接口

// Start 系统管理

// 更改密码
export const updatePasswordAPI = (form: updatePawwsordForm) => {
  return request({
    method: "POST",
    url: "/admin/updatePassword",
    data: form,
  });
};

// 修改用户信息
export const updateUserInfoAPI = (form: updateUserInfoForm) => {
  return request({
    method: "PUT",
    url: "/admin/user",
    data: form,
  });
};

// 新增用户
export const addUserAPI = (form: newUserForm) => {
  return request({
    method: "POST",
    url: "/admin/user",
    data: form,
  });
};

// 删除用户
export const deleteUserdAPI = (id: number) => {
  return request({
    method: "DELETE",
    url: `/admin/user/${id}`,
  });
};

// 用户列表查询
export const searchUserListdAPI = (form: pageList) => {
  return request({
    method: "GET",
    url: "/admin/user/list",
    headers: {
      pageNumber: form.pageNumber,
      pageSize: form.pageSize,
    },
  });
};

// End 系统管理

// Start APT
export const searchAptAPI = (form: pageList) => {
  return request({
    method: "GET",
    url: "/apt/list",
    headers: {
      pageNumber: form.pageNumber,
      pageSize: form.pageSize,
    },
  });
};
// End APT

// Start 定向资产

// End 定向资产
