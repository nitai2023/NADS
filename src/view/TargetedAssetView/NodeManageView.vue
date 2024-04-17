<!-- 节点管理 -->
<template>
  <!--S 查询页面 -->
  <div id="search">
    <el-input placeholder="输入ip,域名"></el-input
    ><el-button type="success"
      ><el-icon><Search /></el-icon>查询</el-button
    >
  </div>
  <!--E 查询页面 -->
  <!--S 结果页面 -->
  <div id="result">
    <h1>节点列表</h1>
    <el-table row-key="date" style="width: 100%">
      <el-table-column prop="id" label="id" width="180" />
      <el-table-column prop="nodeName" label="nodeName" width="180" />
      <el-table-column prop="ip" label="ip" width="180" />
      <el-table-column prop="accountName" label="accountName" width="180" />
      <el-table-column prop="sshKey" label="sshKey" />
      <el-table-column prop="sshPort" label="sshPort" />

      <el-table-column>
        <template #header>
          <el-button size="small" class="el-button--success">添加</el-button>
        </template>

        <template #default="scope">
          <el-button size="small" type="primary">修改</el-button>
          <el-popconfirm
            width="220"
            confirm-button-text="OK"
            cancel-button-text="No, Thanks"
            icon-color="#626AEF"
            title="Are you sure to delete this?"
          >
            <template #reference>
              <el-button size="small" type="danger">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination small layout="prev, pager, next" />
  </div>
  <!--E 结果页面 -->
</template>
<style lang="scss">
#search {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
  .el-input {
    height: 50px;
    width: 800px;
  }
  .el-button {
    height: 50px;
    width: 130px;
  }
}
#result {
  padding-top: 20px;
  h1 {
    display: inline;
    padding-left: 20px;
  }
  .reSearch {
    float: right;
    padding-bottom: 20px;
    padding-right: 20px;
    .el-input {
      width: 200px;
    }
    .el-button {
      width: 74px;
    }
  }
}
.el-button--success {
  background-color: rgb(0, 203, 135);
  color: black;
}
</style>
