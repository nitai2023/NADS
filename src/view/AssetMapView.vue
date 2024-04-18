<script lang="ts" setup></script>
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
    <h1>ip地址</h1>
    <div class="DetailedSearch">
      <el-input placeholder="请输入要搜索的资产"></el-input
      ><el-button class="el-button--add">搜索</el-button>
    </div>
    <hr />

    <el-table style="width: 100%">
      <el-table-column label="id" width="200" />
      <el-table-column label="ip" width="200" />
      <el-table-column label="port" width="200" />
      <el-table-column label="Country" width="200" />
      <el-table-column label="province" width="200" />
      <el-table-column label="city" />
      <el-table-column label="updated_at" />
    </el-table>
    <el-pagination layout="prev, pager, next" :total="50" />

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
