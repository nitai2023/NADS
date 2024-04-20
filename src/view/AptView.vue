<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useAdminStore } from "../store/admin";

let pageForm = ref({
  pageNumber: 1,
  pageSize: 4,
});
const aptListInfo = ref({});

const adminStore = useAdminStore();

const searchAptList = async (pageForm: any) => {
  aptListInfo.value = await adminStore.searchApt(pageForm);
  console.log(aptListInfo.value);
};

// 监听页数变化
watch(
  () => pageForm.value.pageNumber,
  (newPageNumber, oldPageNumber) => {
    searchAptList(pageForm.value);
  }
);

onMounted(async () => {
  await searchAptList(pageForm.value);
});
</script>
<template>
  <h3>APT任务管理</h3>
  <div class="table">
    <el-table
      row-key="date"
      :data="aptListInfo.list"
      style="width: 100%"
      border
      height="600"
    >
      <el-table-column prop="id" label="id" width="80" fixed />
      <el-table-column prop="localReport" label="localReport" width="180" />
      <el-table-column prop="manufacturer" label="manufacturer" width="80" />
      <el-table-column prop="organize" label="organize" width="80" />
      <el-table-column prop="outerLink" label="outerLink" />
      <el-table-column prop="reportName" label="reportName" />
      <el-table-column prop="time" label="time" />
      <el-table-column prop="updateTime" label="updateTime" />
    </el-table>
    <el-pagination
      large
      layout="prev, pager, next"
      :total="aptListInfo.total"
      v-model:current-page="pageForm.pageNumber"
      :page-count="aptListInfo.pages"
    />
  </div>
</template>
<style scoped lang="scss">
h3 {
  height: 25px;
  margin: 20px;
}
.table {
  width: 100%;
  height: calc(100% - 65px);
  margin: 0;
  padding: 0;
  .el-pagination {
    display: flex;
    justify-content: center;
  }
}
</style>
