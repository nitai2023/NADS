<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import { useAssetStore } from "../store/asset";
let pageForm = ref({
  pageNumber: 1,
  pageSize: 7,
});
let isactive = ref(true);

const assetStore = useAssetStore();
const AssetMappingList = [
  {
    id: 1,
    ip: 200,
    transport: 300,
    country: 400,
    area: 500,
    city: 600,
    port: 700,
    time: 800,
  },
  {
    id: 1,
    ip: 200,
    transport: 300,
    country: 400,
    area: 500,
    city: 600,
    port: 700,
    time: 800,
  },
];
// let AssetMappingList = ref({});
// 获取资产测绘
// const searchAssetMappingList = async (pageForm: any) => {
//   AssetMappingList.value = await assetStore.getAssetMappingInfo(pageForm.value);
//   console.log(AssetMappingList.value.list);
// };

// // 监听页数变化
// watch(
//   () => pageForm.value.pageNumber,
//   (newPageNumber, oldPageNumber) => {
//     searchAssetMappingList(pageForm);
//   }
// );
// onMounted(async () => {
//   await searchAssetMappingList(pageForm);
// });
</script>
<!-- 资产测绘 -->
<template>
  <!-- S 查询界面 -->
  <div class="assetMap">
    <h1 v-show="!isactive">IP地址</h1>
    <div class="box" :class="{ active: isactive }">
      <div class="input">
        <h1 v-show="isactive">资产查询</h1>
        <div>
          <el-input placeholder="请输入要查询的IP"></el-input>
          <el-button class="el-button--add" @click="isactive = false"
            >查询</el-button
          >
        </div>
      </div>
    </div>
    <!-- E 查询界面 -->
    <!--S 结果页面 -->
    <div id="result" v-show="!isactive">
      <h2>资产查询</h2>
      <!-- <div class="DetailedSearch">
      <el-input placeholder="请输入要搜索的资产"></el-input
      ><el-button class="el-button--add">搜索</el-button>
    </div> -->
      <hr />
      <el-descriptions
        direction="vertical"
        :column="8"
        v-for="item in AssetMappingList"
        v-show="!isactive"
        border
      >
        <el-descriptions-item width="10%" label="id">{{
          item.id
        }}</el-descriptions-item>
        <el-descriptions-item width="10%" label="ip">{{
          item.ip
        }}</el-descriptions-item>
        <el-descriptions-item width="10%" label="transport">{{
          item.transport
        }}</el-descriptions-item>
        <el-descriptions-item width="10%" label="Country">{{
          item.country
        }}</el-descriptions-item>
        <el-descriptions-item width="10%" label="area">
          {{ item.area }}
        </el-descriptions-item>
        <el-descriptions-item width="10%" label="city">
          {{ item.city }}
        </el-descriptions-item>
        <el-descriptions-item width="10%" label="port">
          {{ item.port }}
        </el-descriptions-item>
        <el-descriptions-item width="10%" label="time">
          {{ item.time }}
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
  </div>
</template>
<style scoped lang="scss">
.assetMap {
  width: 100%;
  height: 100%;
  h1 {
    display: inline-block;
    margin-left: 30px;
  }
}
#search {
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
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
.box {
  width: 30%;
  margin: 20px;
  float: right;
  .input {
    display: flex;
    flex-direction: row;
    > div {
      width: 80%;
      display: flex;
      flex-direction: row;
    }
  }
}
.active {
  width: 100%;
  height: 100%;
  display: flex;

  justify-content: center;
  margin: 0;

  .input {
    margin-top: 10%;
    padding: 5%;
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 40%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    border-radius: 10px;
    h1 {
      text-align: center;
      margin-bottom: 60px;
    }
    > div {
      width: 100%;
      display: flex;
      flex-direction: row;
    }
    .el-input {
      height: 60px;
    }
    .el-button--add {
      height: 60px;
      width: 120px;
      font-size: 20px;
    }
  }
}
.el-button--add {
  background-color: rgb(0, 203, 135);
  color: black;
  width: 60px;
  height: 32px;
}
.el-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
</style>
