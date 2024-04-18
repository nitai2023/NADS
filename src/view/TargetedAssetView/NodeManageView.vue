<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useAssetStore } from "../../store/asset";
import { newNodeForm, updateAssetForm } from "../api/model";

const assetStore = useAssetStore();

let addVisible = ref(false);
let updateVisible = ref(false);

let assetList = ref({});
let newNode = ref({
  accountName: "",
  ip: "",
  nodeName: "",
  sshKey: 0,
  sshPort: 0,
});
let NodeInfo = ref({
  id: 0,
  accountName: "",
  ip: "",
  nodeName: "",
  sshKey: 0,
  sshPort: 0,
});

let pageForm = ref({
  pageNumber: 1,
  pageSize: 10,
});

// 获取节点列表
const searchAssetList = async (pageForm: any) => {
  assetList.value = await assetStore.searchAsset(pageForm);
  console.log(assetList.value);
};

// 添加节点
const addNode = async (newNode: newNodeForm) => {
  await assetStore.addAsset(newNode.value);
  location.reload();
};
// 删除节点
const deleteNode = async (id: number) => {
  await assetStore.deleteAsset(id);
  location.reload();
};

// 获取节点信息
const getNodeInfo = (row) => {
  updateVisible.value = true;
  NodeInfo.value.accountName = row.accountName;
  NodeInfo.value.ip = row.ip;
  NodeInfo.value.id = row.id;
  NodeInfo.value.nodeName = row.nodeName;
  NodeInfo.value.sshKey = row.sshKey;
  NodeInfo.value.sshPort = row.sshPort;
  console.log(NodeInfo.value);
};

// 修改节点信息
const updateNodeInfo = async (NodeInfo: updateAssetForm) => {
  await assetStore.updateAsset(NodeInfo);
  location.reload();
};

onMounted(async () => {
  await searchAssetList(pageForm.value);
});
</script>
<!-- 节点管理 -->
<template>
  <div id="result">
    <h1>节点列表</h1>
    <el-table row-key="date" :data="assetList.list" style="width: 100%">
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
          <el-button size="small" type="primary" @click="getNodeInfo(scope.row)"
            >修改</el-button
          >
          <el-popconfirm
            width="220"
            confirm-button-text="OK"
            cancel-button-text="No, Thanks"
            icon-color="#626AEF"
            title="Are you sure to delete this?"
            @confirm="() => deleteNode(scope.row.id)"
          >
            <template #reference>
              <el-button size="small" type="danger">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <!-- S Component 添加节点 -->
    <el-dialog v-model="addVisible" title="添加节点" width="500">
      <div id="border">
        <el-form
          label-position="top"
          style="max-width: 600px"
          :model="newNode"
          status-icon
          label-width="auto"
          class="demo-ruleForm"
        >
          <div class="form-row">
            <el-form-item label="nodeName :">
              <el-input v-model="newNode.nodeName" />
            </el-form-item>
            <el-form-item label="ip :">
              <el-input v-model="newNode.ip" />
            </el-form-item>
          </div>
          <div class="form-row">
            <el-form-item label="accountName :">
              <el-input v-model="newNode.accountName" />
            </el-form-item>
          </div>
          <div class="form-row">
            <el-form-item label="sshKey :">
              <el-input v-model="newNode.sshKey" />
            </el-form-item>
          </div>
          <div class="form-row">
            <el-form-item label="sshPort :">
              <el-input v-model="newNode.sshPort" />
            </el-form-item>
          </div>
          <div class="form-row">
            <el-form-item>
              <el-button
                type="primary"
                class="item"
                style="width: 130px"
                @click="addNode(newNode)"
                >增加</el-button
              >
            </el-form-item>
          </div>
        </el-form>
      </div>
    </el-dialog>
    <!-- E Component 添加节点 -->
    <!-- S Component 修改节点 -->
    <el-dialog v-model="updateVisible" title="修改节点" width="500">
      <div id="border">
        <el-form
          label-position="top"
          style="max-width: 600px"
          :model="NodeInfo"
          status-icon
          label-width="auto"
          class="demo-ruleForm"
        >
          <div class="form-row">
            <el-form-item label="nodeName :">
              <el-input v-model="NodeInfo.nodeName" />
            </el-form-item>
            <el-form-item label="ip :">
              <el-input v-model="NodeInfo.ip" />
            </el-form-item>
          </div>
          <div class="form-row">
            <el-form-item label="accountName :">
              <el-input v-model="NodeInfo.accountName" />
            </el-form-item>
          </div>
          <div class="form-row">
            <el-form-item label="sshKey :">
              <el-input v-model="NodeInfo.sshKey" />
            </el-form-item>
          </div>
          <div class="form-row">
            <el-form-item label="sshPort :">
              <el-input v-model="NodeInfo.sshPort" />
            </el-form-item>
          </div>
          <div class="form-row">
            <el-form-item>
              <el-button
                type="primary"
                class="item"
                style="width: 130px"
                @click="updateNodeInfo(NodeInfo)"
                >修改</el-button
              >
            </el-form-item>
          </div>
        </el-form>
      </div>
    </el-dialog>
    <!-- E Component 修改节点 -->
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
