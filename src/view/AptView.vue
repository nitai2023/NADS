<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useAdminStore } from "../store/admin";

let pageForm = ref({
  pageNumber: 1,
  pageSize: 10,
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
  <div>
    <el-table row-key="date" :data="aptListInfo.list" style="width: 100%">
      <el-table-column prop="id" label="id" width="80" />
      <el-table-column prop="foundTime" label="foundTime" width="180" />
      <el-table-column prop="localReport" label="localReport" width="180" />
      <el-table-column prop="organization" label="organization" width="180" />
      <el-table-column prop="outerLink" label="outerLink" />
      <el-table-column prop="publisher" label="publisher" />
      <el-table-column prop="reportName" label="reportName" />
      <el-table-column prop="userId" label="userId" />
      <el-table-column>
        <template #header>
          <el-button size="small" type="success">添加</el-button>
        </template>

        <template #default="scope">
          <el-button size="small" type="primary">修改</el-button>
          <el-popconfirm
            width="220"
            confirm-button-text="OK"
            cancel-button-text="No, Thanks"
            :icon="InfoFilled"
            icon-color="#626AEF"
            title="Are you sure to delete this?"
            @confirm="() => {}"
          >
            <template #reference>
              <el-button size="small" type="danger">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      small
      layout="prev, pager, next"
      :total="aptListInfo.total"
      v-model:current-page="pageForm.pageNumber"
      :page-count="aptListInfo.pages"
    />
  </div>
</template>
<style scoped lang="scss"></style>
