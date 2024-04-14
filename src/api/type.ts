import request from ".";
import {
  forgetPawwsordForm,
  loginForm,
  newUserForm,
  pageList,
  updatePawwsordForm,
  updateUserInfoForm,
} from "./model";

// 读取cookie
let getCookie = (cookieName: string) => {
  let name = cookieName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let cookieArray = decodedCookie.split(";");
  for (let i = 0; i < cookieArray.length; i++) {
    let c = cookieArray[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

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
export const getCaptchaAPI = (username: string) => {
  return request({
    method: "GET",
    responseType: "blob",
    url: `/api/login/captcha?username=${username}`,
  });
};

// responseType: "blob",

// 登出
export const userLogoutAPI = () => {
  return request({
    method: "GET",
    url: "/api/logout",
    headers: {
      token: getCookie("token"),
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
    headers: {
      token: getCookie("token"),
    },
  });
};

// 修改用户信息
export const updateUserInfoAPI = (form: updateUserInfoForm) => {
  return request({
    method: "PUT",
    url: "/admin/user",
    data: form,
    headers: {
      token: getCookie("token"),
    },
  });
};

// 新增用户
export const addUserAPI = (form: newUserForm) => {
  return request({
    method: "POST",
    url: "/admin/user",
    data: form,
    headers: {
      token: getCookie("token"),
    },
  });
};

// 删除用户
export const deleteUserdAPI = (id: number) => {
  return request({
    method: "DELETE",
    url: `/admin/user/${id}`,
    headers: {
      token: getCookie("token"),
    },
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

// 定向资产添加
// export const searchDirectAPI = (id: number) => {
//   return request({
//     method: "GET",
//     url: "/property/direct",
//   });
// };

// End 定向资产
