import { defineStore } from "pinia";
import {
  newAssetForm,
  newTaskForm,
  pageList,
  updateAssetForm,
} from "../api/model";
import {
  addAssetAPI,
  addTaskAPI,
  deleteAssetAPI,
  searchAssetAPI,
  updateAssetAPI,
} from "../api/type";

export const useAssetStore = defineStore("asset", () => {
  // 资产列表查询
  const searchAsset = async (form: pageList) => {
    try {
      const res = await searchAssetAPI(form);
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  };
  // 添加资产
  const addAsset = async (form: newAssetForm) => {
    try {
      await addAssetAPI(form);
    } catch (error) {
      console.log(error);
    }
  };
  // 更新资产
  const updateAsset = async (form: updateAssetForm) => {
    try {
      await updateAssetAPI(form);
    } catch (error) {
      console.log(error);
    }
  };
  // 删除资产
  const deleteAsset = async (nodeId: number) => {
    try {
      const res = await deleteAssetAPI(nodeId);
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  };
  // 添加任务
  const addTask = async (form: newTaskForm) => {
    try {
      await addTaskAPI(form);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    searchAsset,
    addAsset,
    updateAsset,
    deleteAsset,
    addTask,
  };
});
