import { ElMessage } from "element-plus";
import { defineStore } from "pinia";

import {
  newUserForm,
  pageList,
  updatePawwsordForm,
  updateUserInfoForm,
} from "../api/model";
import {
  addUserAPI,
  deleteUserdAPI,
  searchAptAPI,
  searchUserListdAPI,
  updatePasswordAPI,
  updateUserInfoAPI,
} from "../api/type";
export const useAdminStore = defineStore("admin", () => {
  // 更新用户密码
  const updatePassword = async (form: updatePawwsordForm) => {
    try {
      await updatePasswordAPI(form);
      setTimeout(() => {
        ElMessage({
          type: "success",
          message: "用户密码更新成功",
        });
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };
  // 更新用户信息
  const updateUserInfo = async (form: updateUserInfoForm) => {
    try {
      await updateUserInfoAPI(form);
      setTimeout(() => {
        ElMessage({
          type: "success",
          message: "用户信息更新成功",
        });
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };
  // 添加用户
  const addUser = async (form: newUserForm) => {
    try {
      await addUserAPI(form);
      setTimeout(() => {
        ElMessage({
          type: "success",
          message: "新用户添加成功",
        });
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };
  // 删除用户
  const deleteUserd = async (id: number) => {
    try {
      await deleteUserdAPI(id);
      setTimeout(() => {
        ElMessage({
          type: "success",
          message: "用户已删除",
        });
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };
  // 获取用户列表
  const searchUserListd = async (form: pageList) => {
    try {
      const res = await searchUserListdAPI(form);
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  };
  // 获取APT列表
  const searchApt = async (form: pageList) => {
    try {
      const res = await searchAptAPI(form);
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  };
  return {
    updatePassword,
    updateUserInfo,
    addUser,
    deleteUserd,
    searchUserListd,
    searchApt,
  };
});
