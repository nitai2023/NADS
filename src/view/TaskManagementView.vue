<script setup lang="ts">
import { ref } from "vue";
import { useAssetStore } from "../store/asset";

let newTaskInfo = ref({
  name: "property",
  startIp: "127.0.0.1",
  endIp: "127.0.0.1",
  startPort: 22,
  endPort: 442,
});

const assetStore = useAssetStore();
// 添加任务
// const addTask = async (taskInfo: newTaskForm) => {
//   await assetStore.addTask(taskInfo);
//   location.reload();
// };
</script>
<template>
  <h1>扫描任务管理</h1>
</template>
<style lang="scss"></style>
