import { ElMessage } from "element-plus";
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
  deleteTaskAPI,
  getAssetMappingInfoAPI,
  getTaskInfoAPI,
  scanPortAPI,
  scanVulnAPI,
  searchAssetAPI,
  searchTaskAPI,
  updateAssetAPI,
} from "../api/type";

export const useAssetStore = defineStore("asset", () => {
  // 资产测绘信息
  const getAssetMappingInfo = async (form: pageList) => {
    try {
      const res = await getAssetMappingInfoAPI(form);
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  };

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
      console.log(form);

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
      const res = await addTaskAPI(form);
      if (res.data.msg == "OK")
        setTimeout(() => {
          ElMessage({
            type: "success",
            message: "任务创建成功",
          });
        }, 500);
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
  // 删除任务
  const deleteTask = async (taskId: number) => {
    try {
      const res = await deleteTaskAPI(taskId);
    } catch (error) {
      console.log(error);
    }
  };
  // 获取任务详情
  const getTaskInfo = async (taskId: number) => {
    try {
      const res = await getTaskInfoAPI(taskId);
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  };
  // 端口扫描
  const scanPort = async (taskId: number) => {
    try {
      const res = await scanPortAPI(taskId);
    } catch (error) {
      console.log(error);
    }
  };
  // 漏洞扫描
  const scanVuln = async (taskId: number) => {
    try {
      const res = await scanVulnAPI(taskId);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    getAssetMappingInfo,
    searchAsset,
    addAsset,
    updateAsset,
    deleteAsset,
    addTask,
    searchTask,
    scanPort,
    deleteTask,
    getTaskInfo,
    scanVuln,
  };
});
