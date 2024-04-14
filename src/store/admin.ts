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
  const updatePassword = async (form: updatePawwsordForm) => {
    updatePasswordAPI(form);
  };
  const updateUserInfo = async (form: updateUserInfoForm) => {
    updateUserInfoAPI(form);
  };
  const addUser = async (form: newUserForm) => {
    addUserAPI(form);
  };
  const deleteUserd = async (id: number) => {
    deleteUserdAPI(id);
  };
  const searchUserListd = async (form: pageList) => {
    searchUserListdAPI(form);
  };
  const searchApt = async (form: pageList) => {
    searchAptAPI(form);
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
