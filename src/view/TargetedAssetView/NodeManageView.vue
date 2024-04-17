<script>
import { onMounted, ref, watch } from "vue";
let addVisible = ref(false);
let updateVisible = ref(false);
</script>
<!-- 节点管理 -->
<template>
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
          <el-button
            size="small"
            class="el-button--success"
            @click="
              addVisible = true;
              console.log(addVisible);
            "
            >添加</el-button
          >
        </template>

        <template #default="scope">
          <el-button size="small" type="primary" @click="updateVisible = true"
            >修改</el-button
          >
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
  </div>
</template>
<style scoped lang="scss">
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
form {
  width: 100%;
}
.form-row {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.el-form-item {
  flex: 1;
  margin-right: 20px;
}
.el-form-item:last-child {
  margin-right: 0;
}
.el-button--success {
  background-color: rgb(0, 203, 135);
  color: black;
}
</style>
