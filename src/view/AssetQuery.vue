<script lang="ts" setup>
import { InfoFilled } from "@element-plus/icons-vue";
import { onMounted, ref, watch } from "vue";
import { newAssetForm, updateAssetForm } from "../api/model";
import { useAssetStore } from "../store/asset";

let assetListInfo = ref([]);
let pageForm = ref({
  pageNumber: 1,
  pageSize: 10,
});
let newAssetInfo = ref({
  accountName: "",
  ip: "",
  nodeName: "",
  sshKey: 0,
  sshPort: 0,
});
let assetInfo = ref({
  id: 0,
  accountName: "",
  ip: "",
  nodeName: "",
  sshKey: 0,
  sshPort: 0,
});

let addVisible = ref(false);
let updateVisible = ref(false);

const assetStore = useAssetStore();

// 获取资产列表
const searchAssetList = async (pageForm: any) => {
  assetListInfo.value = await assetStore.searchAsset(pageForm);
  console.log(assetListInfo.value);
};
// 监听页数变化
watch(
  () => pageForm.value.pageNumber,
  (newPageNumber, oldPageNumber) => {
    searchAssetList(pageForm.value);
  }
);

// 添加资产
const addAsset = async (assInfo: newAssetForm) => {
  await assetStore.addAsset(assInfo);
  location.reload();
};
// 删除资产
const deleteAsset = async (id: number) => {
  await assetStore.deleteAsset(id);
  location.reload();
};
// 修改资产
const updateAsset = async (assInfo: updateAssetForm) => {
  await assetStore.updateAsset(assInfo);
  location.reload();
};
// 获取资产信息
const getAssetInfo = (row) => {
  updateVisible.value = true;
  assetInfo.value.accountName = row.accountName;
  assetInfo.value.id = row.id;
  assetInfo.value.ip = row.ip;
  assetInfo.value.nodeName = row.nodeName;
  assetInfo.value.sshKey = row.sshKey;
  assetInfo.value.sshPort = row.sshPort;
};

onMounted(async () => {
  await searchAssetList(pageForm.value);
});
</script>
<!-- Asset Query -->
<template>
  <div>
    <el-table row-key="date" :data="assetListInfo.list" style="width: 100%">
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
            @click="addVisible = true"
            >添加</el-button
          >
        </template>

        <template #default="scope">
          <el-button
            size="small"
            type="primary"
            @click="getAssetInfo(scope.row)"
            >修改</el-button
          >
          <el-popconfirm
            width="220"
            confirm-button-text="OK"
            cancel-button-text="No, Thanks"
            :icon="InfoFilled"
            icon-color="#626AEF"
            title="Are you sure to delete this?"
            @confirm="() => deleteAsset(scope.row.id)"
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
      :total="assetListInfo.total"
      v-model:current-page="pageForm.pageNumber"
      :page-count="assetListInfo.pages"
    />
    <!-- S Component 添加资产 -->
    <el-dialog v-model="addVisible" title="添加用户" width="500">
      <div id="border">
        <el-form
          label-position="top"
          style="max-width: 600px"
          :model="newAssetInfo"
          status-icon
          label-width="auto"
          class="demo-ruleForm"
        >
          <div class="form-row">
            <el-form-item label="accountName :">
              <el-input v-model="newAssetInfo.accountName" />
            </el-form-item>
          </div>
          <div class="form-row">
            <el-form-item label="ip :">
              <el-input v-model="newAssetInfo.ip" />
            </el-form-item>
            <el-form-item label="nodeName :">
              <el-input v-model="newAssetInfo.nodeName" />
            </el-form-item>
          </div>
          <div class="form-row">
            <el-form-item label="sshKey :">
              <el-input v-model="newAssetInfo.sshKey" />
            </el-form-item>

            <el-form-item label="sshPort :">
              <el-input v-model="newAssetInfo.sshPort" />
            </el-form-item>
          </div>
          <div class="form-row">
            <el-form-item>
              <el-button
                type="primary"
                class="item"
                style="width: 130px"
                @click="addAsset(newAssetInfo)"
                >添加</el-button
              >
            </el-form-item>
          </div>
        </el-form>
      </div>
    </el-dialog>
    <!-- E Component 添加资产 -->

    <!-- S Component 修改资产 -->
    <el-dialog v-model="updateVisible" title="修改用户信息" width="500">
      <div id="border">
        <el-form
          label-position="top"
          style="max-width: 600px"
          :model="assetInfo"
          status-icon
          label-width="auto"
          class="demo-ruleForm"
        >
          <div class="form-row">
            <el-form-item label="accountName :">
              <el-input v-model="assetInfo.accountName" />
            </el-form-item>
          </div>
          <div class="form-row">
            <el-form-item label="ip :">
              <el-input v-model="assetInfo.ip" />
            </el-form-item>
            <el-form-item label="nodeName :">
              <el-input v-model="assetInfo.nodeName" />
            </el-form-item>
          </div>
          <div class="form-row">
            <el-form-item label="sshKey :">
              <el-input v-model="assetInfo.sshKey" />
            </el-form-item>

            <el-form-item label="sshPort :">
              <el-input v-model="assetInfo.sshPort" />
            </el-form-item>
          </div>
          <div class="form-row">
            <el-form-item>
              <el-button
                type="primary"
                class="item"
                style="width: 130px"
                @click="updateAsset(assetInfo)"
                >修改</el-button
              >
            </el-form-item>
          </div>
        </el-form>
      </div>
    </el-dialog>
    <!-- E Component 修改资产 -->
  </div>
</template>
<style scoped lang="scss">
.el-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.cell {
  display: flex;
}
.el-button--success {
  background-color: rgb(0, 203, 135);
  color: black;
}
</style>
