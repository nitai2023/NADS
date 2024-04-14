<script lang="ts" setup>
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
<template>
  <div>
    <el-table row-key="date" :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="id" width="180" #empty />
      <el-table-column prop="username" label="username" width="180" #empty />
      <el-table-column prop="isAdmin" label="IsAdmin" width="180" #empty />
      <el-table-column prop="name" label="Name" width="180" #empty />
      <el-table-column
        prop="characterName"
        label="CharacterName"
        width="180"
        #empty
      />
      <el-table-column prop="characterName" label="CharacterName" #empty />
      <el-table-column align="right">
        <template #header>
          <el-button size="small" type="success">Add</el-button>
        </template>
        <template #default>
          <el-button size="small" type="primary">Edit</el-button>
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
  </div>
</template>
<style>
.el-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.cell {
  display: flex;
}
</style>
