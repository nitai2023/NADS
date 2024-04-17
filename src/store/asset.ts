import { defineStore } from "pinia";
import {
  newAssetForm,
  newTaskForm,
  pageList,
  scanPortForm,
  updateAssetForm,
} from "../api/model";
import {
  addAssetAPI,
  addTaskAPI,
  deleteAssetAPI,
  scanPortAPI,
  scanVulnAPI,
  searchAssetAPI,
  searchTaskAPI,
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
  // 获取任务
  const searchTask = async (form: pageList) => {
    try {
      const res = await searchTaskAPI(form);
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  };
  // 端口扫描
  const scanPort = async (form: scanPortForm) => {
    try {
      const res = await scanPortAPI(form);
    } catch (error) {
      console.log(error);
    }
  };
  // 漏洞扫描
  const scanVuln = async (ip: string) => {
    try {
      const res = await scanVulnAPI(ip);
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
    searchTask,
    scanPort,
    scanVuln,
  };
});
