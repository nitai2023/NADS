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
      updatePasswordAPI(form);
    } catch (error) {
      console.log(error);
    }
  };
  // 更新用户信息
  const updateUserInfo = async (form: updateUserInfoForm) => {
    try {
      await updateUserInfoAPI(form);
    } catch (error) {
      console.log(error);
    }
  };
  // 添加用户
  const addUser = async (form: newUserForm) => {
    try {
      await addUserAPI(form);
    } catch (error) {
      console.log(error);
    }
  };
  // 删除用户
  const deleteUserd = async (id: number) => {
    try {
      await deleteUserdAPI(id);
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
