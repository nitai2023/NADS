<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import { useAssetStore } from "../store/asset";
let pageForm = ref({
  pageNumber: 1,
  pageSize: 7,
});

let AssetMappingList = ref({});

const assetStore = useAssetStore();

// 获取资产测绘
const searchAssetMappingList = async (pageForm: any) => {
  AssetMappingList.value = await assetStore.getAssetMappingInfo(pageForm.value);
  console.log(AssetMappingList.value.list);
};

// 监听页数变化
watch(
  () => pageForm.value.pageNumber,
  (newPageNumber, oldPageNumber) => {
    searchAssetMappingList(pageForm);
  }
);
onMounted(async () => {
  await searchAssetMappingList(pageForm);
});
</script>
<!-- 资产测绘 -->
<template>
  <!-- S 查询界面 -->
  <div id="search">
    <el-input placeholder="输入ip,域名,md5"></el-input
    ><el-button class="el-button--add"
      ><el-icon><Search /></el-icon>查询</el-button
    >
  </div>
  <!-- E 查询界面 -->
  <!--S 结果页面 -->
  <div id="result">
    <h2>资产查询</h2>
    <!-- <div class="DetailedSearch">
      <el-input placeholder="请输入要搜索的资产"></el-input
      ><el-button class="el-button--add">搜索</el-button>
    </div> -->
    <hr />
    <el-descriptions
      direction="vertical"
      :column="7"
      v-for="item in AssetMappingList.list"
      border
    >
      <el-descriptions-item width="16%" label="ip">{{
        item.ip
      }}</el-descriptions-item>
      <el-descriptions-item width="10%" label="port">{{
        item.port
      }}</el-descriptions-item>
      <el-descriptions-item width="10%" label="Country">{{
        item.country
      }}</el-descriptions-item>
      <el-descriptions-item width="14%" label="province">
        {{ item.province }}
      </el-descriptions-item>
      <el-descriptions-item width="10%" label="city">
        {{ item.city }}
      </el-descriptions-item>
      <el-descriptions-item width="16%" label="updated">
        {{ item.updatedAt }}
      </el-descriptions-item>
    </el-descriptions>
    <el-pagination
      small
      layout="prev, pager, next"
      :total="AssetMappingList.total"
      v-model:current-page="pageForm.pageNumber"
      :page-count="AssetMappingList.pages"
    />
    <!--E 结果页面 -->
  </div>
</template>
<style scoped lang="scss">
#search {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 20%;
  display: none;
  .el-input {
    height: 50px;
    width: 800px;
  }
  .el-button--add {
    height: 50px;
    width: 130px;
    background-color: rgb(0, 203, 135);
    color: black;
  }
}
#result {
  width: 100%;
  height: 100%;
  padding-top: 20px;
  h1 {
    display: inline-block;
    padding-left: 30px;
  }
  .DetailedSearch {
    display: inline-block;
    margin-left: 60%;
    .el-input {
      width: 200px;
    }
    .el-button--add {
      background-color: rgb(0, 203, 135);
      color: black;
    }
  }
}
.el-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
</style>
