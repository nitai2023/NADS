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
    <el-table row-key="date" :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="id" width="180" #empty />
      <el-table-column prop="username" label="username" width="180" #empty />
      <el-table-column prop="isAdmin" label="IsAdmin" width="180" #empty />
      <el-table-column prop="name" label="Name" width="180" #empty />
      <el-table-column prop="characterName" label="CharacterName" #empty />
      <el-table-column prop="characterName" label="CharacterName" #empty />
      <el-table-column>
        <template #header>
          <el-button size="small" type="success" @click="dialogVisible = true"
            >Add</el-button
          >
        </template>
        <template #default>
          <el-button size="small" type="primary">Edit</el-button>
          <el-button size="small" type="danger">Delete</el-button>
        </template></el-table-column
      >
    </el-table>
    <el-pagination
      small
      layout="prev, pager, next"
      :total="userListInfo.total"
      v-model:current-page="pageForm.pageNumber"
      :page-count="userListInfo.pages"
    />
    <el-dialog v-model="dialogVisible" title="添加用户" width="500">
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
            <el-form-item label="管理员">
              <el-switch v-model="newUserInfo.isAdmin" />
            </el-form-item>
          </div>
          <div class="form-row">
            <el-form-item label="用户名 :">
              <el-input v-model="newUserInfo.username" />
            </el-form-item>
            <el-form-item label="姓名 :">
              <el-input v-model="newUserInfo.name" />
            </el-form-item>
          </div>
          <div class="form-row">
            <el-form-item label="角色名 :">
              <el-input v-model="newUserInfo.characterName" />
            </el-form-item>

            <el-form-item label="密码 :" prop="checkPass">
              <el-input v-model="newUserInfo.password" />
            </el-form-item>
          </div>
          <div class="form-row">
            <el-form-item>
              <el-button
                type="primary"
                class="item"
                style="width: 130px"
                @click="addUser(newUserInfo)"
                >注册</el-button
              >
            </el-form-item>
          </div>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>
<style>
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
</style>
