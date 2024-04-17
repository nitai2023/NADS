<script lang="ts" setup>
import { InfoFilled } from "@element-plus/icons-vue";
import { onMounted, ref, watch } from "vue";
import { newUserForm, updateUserInfoForm } from "../api/model";
import { useAdminStore } from "../store/admin";

let newUserInfo = ref({
  username: "",
  name: "",
  characterName: "",
  isAdmin: false,
  password: "",
});
let UserInfo = ref({
  username: "",
  name: "",
  characterName: "",
  isAdmin: false,
  id: 0,
});
let userListInfo = ref([]);
let pageForm = ref({
  pageNumber: 1,
  pageSize: 10,
});

let addVisible = ref(false);
let updateVisible = ref(false);

const adminStore = useAdminStore();

// 获取用户列表
const searchUserListd = async (pageForm: any) => {
  userListInfo.value = await adminStore.searchUserListd(pageForm.value);
  console.log(userListInfo.value);
};
// 监听页数变化
watch(
  () => pageForm.value.pageNumber,
  (newPageNumber, oldPageNumber) => {
    searchUserListd(pageForm);
  }
);
// 添加用户
const addUser = async (UserInfo: newUserForm) => {
  await adminStore.addUser(UserInfo);
  location.reload();
};
// 删除用户
const deleteUser = async (id: number) => {
  await adminStore.deleteUserd(id);
  location.reload();
};

// 获取用户信息
const getUserInfo = (row) => {
  updateVisible.value = true;
  UserInfo.value.username = row.username;
  UserInfo.value.name = row.name;
  UserInfo.value.characterName = row.characterName;
  UserInfo.value.isAdmin = row.isAdmin;
  UserInfo.value.id = row.id;
};

// 修改用户信息
const updateUserInfo = async (UserInfo: updateUserInfoForm) => {
  await adminStore.updateUserInfo(UserInfo);
  location.reload();
};

onMounted(async () => {
  await searchUserListd(pageForm);
});
</script>
<!-- UserManangement -->
<template>
  <div>
    <el-table row-key="date" :data="userListInfo.list" style="width: 100%">
      <el-table-column prop="id" label="id" width="180" />
      <el-table-column prop="name" label="name" width="180" />
      <el-table-column prop="username" label="username" width="180" />
      <el-table-column prop="characterName" label="characterName" width="180" />
      <el-table-column prop="isAdmin" label="isAdmin" />
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
          <el-button size="small" type="primary" @click="getUserInfo(scope.row)"
            >修改</el-button
          >
          <el-popconfirm
            width="220"
            confirm-button-text="OK"
            cancel-button-text="No, Thanks"
            :icon="InfoFilled"
            icon-color="#626AEF"
            title="Are you sure to delete this?"
            @confirm="() => deleteUser(scope.row.id)"
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
      :total="userListInfo.total"
      v-model:current-page="pageForm.pageNumber"
      :page-count="userListInfo.pages"
    />
    <!-- S Component 添加任务 -->
    <el-dialog v-model="addVisible" title="添加任务" width="500">
      <div id="border">
        <el-form
          label-position="top"
          style="max-width: 600px"
          :model="newUserInfo"
          status-icon
          label-width="auto"
          class="demo-ruleForm"
        >
          <div class="form-row">
            <el-form-item label="name :">
              <el-input />
            </el-form-item>
          </div>
          <div class="form-row">
            <el-form-item label="startIp :">
              <el-input />
            </el-form-item>
            <el-form-item label="endIp :">
              <el-input />
            </el-form-item>
          </div>
          <div class="form-row">
            <el-form-item label="startPort :">
              <el-input />
            </el-form-item>

            <el-form-item label="endPort :">
              <el-input />
            </el-form-item>
          </div>
          <div class="form-row">
            <el-form-item>
              <el-button
                type="primary"
                class="item"
                style="width: 130px"
                @click="addUser(newUserInfo)"
                >添加</el-button
              >
            </el-form-item>
          </div>
        </el-form>
      </div>
    </el-dialog>
    <!-- E Component 添加任务 -->

    <!-- S Component 修改任务 -->
    <el-dialog v-model="updateVisible" title="修改用户信息" width="500">
      <div id="border">
        <el-form
          label-position="top"
          style="max-width: 600px"
          :model="UserInfo"
          status-icon
          label-width="auto"
          class="demo-ruleForm"
        >
          <div class="form-row">
            <el-form-item label="isAdmin :">
              <el-switch v-model="UserInfo.isAdmin" size="large" />
            </el-form-item>
          </div>
          <div class="form-row">
            <el-form-item label="name :">
              <el-input v-model="UserInfo.name" />
            </el-form-item>
            <el-form-item label="characterName :">
              <el-input v-model="UserInfo.characterName" />
            </el-form-item>
          </div>
          <div class="form-row">
            <el-form-item label="username :">
              <el-input v-model="UserInfo.username" />
            </el-form-item>
          </div>
          <div class="form-row">
            <el-form-item>
              <el-button
                type="primary"
                class="item"
                style="width: 130px"
                @click="updateUserInfo(UserInfo)"
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
#border {
  padding: 50px;
  width: 400px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
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
