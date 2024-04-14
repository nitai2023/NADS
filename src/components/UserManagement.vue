<script lang="ts" setup>
import { ref } from "vue";
let AddDialog = ref(false);
let EditDialog = ref(false);
interface User {
  id: number;
  username: string;
  isAdmin: boolean;
  name: string;
  characterName: string;
}
const tableData: User[] = [
  {
    id: 1,
    username: "user",
    isAdmin: false,
    name: "用户",
    characterName: "角色名",
  },
  {
    id: 2,
    username: "admin",
    isAdmin: true,
    name: "管理员",
    characterName: "角色名",
  },
];
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
      <el-table-column>
        <template #header>
          <el-button size="small" type="success" @click="AddDialog = true"
            >Add</el-button
          >
        </template>
        <template #default>
          <el-button size="small" type="primary" @click="EditDialog = true"
            >Edit</el-button
          >
          <el-button size="small" type="danger">Delete</el-button>
        </template></el-table-column
      >
    </el-table>
    <el-pagination
      small
      background
      layout="prev, pager, next"
      :total="50"
      class="mt-4"
    />
    <el-dialog v-model="AddDialog" title="添加用户" width="500">
      <div id="border">
        <el-form
          label-position="top"
          style="max-width: 600px"
          status-icon
          label-width="auto"
          class="demo-ruleForm"
        >
          <div class="form-row">
            <el-form-item label="管理员">
              <el-switch />
            </el-form-item>
          </div>
          <div class="form-row">
            <el-form-item label="用户名 :">
              <el-input />
            </el-form-item>
            <el-form-item label="姓名 :">
              <el-input />
            </el-form-item>
          </div>
          <div class="form-row">
            <el-form-item label="角色名 :">
              <el-input />
            </el-form-item>

            <el-form-item label="密码 :" prop="checkPass">
              <el-input type="password" autocomplete="off" />
            </el-form-item>
          </div>
          <div class="form-row">
            <el-form-item>
              <el-button type="primary" class="item" style="width: 130px"
                >注册</el-button
              >
            </el-form-item>
          </div>
        </el-form>
      </div>
    </el-dialog>
    <el-dialog v-model="EditDialog" title="编辑用户" width="500">
      <div id="border">
        <el-form
          label-position="top"
          style="max-width: 600px"
          status-icon
          label-width="auto"
          class="demo-ruleForm"
        >
          <div class="form-row">
            <el-form-item label="用户名 :">
              <el-input />
            </el-form-item>
            <el-form-item label="管理员">
              <el-switch />
            </el-form-item>
          </div>
          <div class="form-row">
            <el-form-item label="姓名 :">
              <el-input />
            </el-form-item>

            <el-form-item label="角色名 :">
              <el-input />
            </el-form-item>
          </div>
          <div class="form-row">
            <el-form-item label="密码 :" prop="checkPass">
              <el-input type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item label="验证码 :" prop="age">
              <el-input />
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
