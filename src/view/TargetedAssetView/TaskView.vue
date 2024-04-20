<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useAssetStore } from "../../store/asset";

const assetStore = useAssetStore();
const addVisible = ref(false);
const viewChangeVisible = ref(false);
let getType = (itemStatue: String) => {
  switch (itemStatue) {
    case "stopped":
      return "danger";
    case "pending":
      return "primary";
    case "finished":
      return "success";
  }
};
let newTask = ref({
  name: null,
  startIp: null,
  endIp: null,

  type: "portscan",
});
let pageForm = ref({
  pageNumber: 1,
  pageSize: 5,
});
let TaskListInfo = ref({});

const addTask = async (taskInfo: newTaskForm) => {
  await assetStore.addTask(taskInfo);
  await searchTaskList(pageForm);
  addVisible.value = false;
};
// 获取任务列表
const searchTaskList = async (pageForm: any) => {
  TaskListInfo.value = await assetStore.searchTask(pageForm.value);
};

// 任务详情
const getTaskInfo = async (taskId: number) => {
  await assetStore.getTaskInfo(taskId);
};
// 监听页数变化
watch(
  () => pageForm.value.pageNumber,
  (newPageNumber, oldPageNumber) => {
    searchTaskList(pageForm);
  }
);

// 删除任务
const deleteTask = async (taskId: number) => {
  await assetStore.deleteTask(taskId);
  await searchTaskList(pageForm);
};

onMounted(async () => {
  await searchTaskList(pageForm);
});
</script>
<!-- create task -->
<template>
  <!-- S Conmponet 创建任务 -->
  <div id="box" v-if="viewChangeVisible">
    <el-button
      size="small"
      class="el-button--success el-button"
      @click="viewChangeVisible = false"
      >返回</el-button
    >
    <h1>创建任务</h1>
    <el-form label-position="right">
      <el-text class="mx-1" type="info">
        提示: <br />
        测试IP使用本地IP(127.0.0.1) <br />port范围选取在(22~443)
        <br />
        当创建端口扫描任务时请完整填写表单信息 <br />
        当创建漏洞扫描任务时IP必填、port可选
      </el-text>
      <el-form-item style="margin-top: 20px">
        <el-radio-group v-model="newTask.type" size="large">
          <el-radio-button label="漏洞扫描" value="vulnscan" />
          <el-radio-button label="端口扫描" value="portscan" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label=" 任务名称  :" width="400">
        <el-input v-model="newTask.name" />
      </el-form-item>
      <el-form-item v-if="newTask.type !== 'portscan'" label=" IP:" width="400">
        <el-input v-model="newTask.vulnScanIp" />
      </el-form-item>
      <el-form-item v-if="newTask.type == 'portscan'" label="起始IP :">
        <el-input width="400" v-model="newTask.startIp" />
      </el-form-item>
      <el-form-item v-if="newTask.type == 'portscan'" label="结束IP :">
        <el-input width="400" v-model="newTask.endIp" />
      </el-form-item>
      <el-form-item v-if="newTask.type == 'portscan'" label="起始端口 :">
        <el-input width="400" v-model="newTask.startPort" />
      </el-form-item>
      <el-form-item v-if="newTask.type == 'portscan'" label="结束端口 :">
        <el-input width="400" v-model="newTask.endPort" />
      </el-form-item>

      <el-form-item>
        <el-button class="el-button--success" @click="addVisible = true"
          >提交</el-button
        ><el-button>重置</el-button>
      </el-form-item>
    </el-form>
    <el-dialog v-model="addVisible" title="Tips" width="500">
      <span>是否确认创建此任务？</span>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="addVisible = false">取消</el-button>
          <el-button type="primary" @click="addTask(newTask)"> 确认 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
  <!-- E Conmponet 创建任务 -->

  <!-- S Conmponet 任务列表 -->
  <div v-else>
    <el-button
      size="small"
      class="el-button--success el-button"
      @click="viewChangeVisible = true"
      >添加</el-button
    >
    <div>
      <div v-for="item in TaskListInfo.list" class="task" size="small">
        <el-descriptions
          class="margin-top"
          :title="item.type == 'portscan' ? '端口扫描' : '漏洞扫描'"
          column="4"
          size="small"
          border
        >
          <template #extra>
            <el-button size="small" type="danger" @click="getTaskInfo(item.id)"
              >详情</el-button
            >
            <el-popconfirm
              width="220"
              confirm-button-text="OK"
              cancel-button-text="No, Thanks"
              icon-color="#626AEF"
              title="Are you sure to delete this?"
              @confirm="() => deleteTask(item.id)"
            >
              <template #reference>
                <el-button size="small" type="danger">删除</el-button>
              </template>
            </el-popconfirm>
          </template>

          <el-descriptions-item>
            <template #label>
              <div class="cell-item">id</div>
            </template>
            {{ item.id }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">name</div>
            </template>
            {{ item.name }}
          </el-descriptions-item>
          <el-descriptions-item v-if="item.startIp">
            <template #label>
              <div class="cell-item">startIp</div>
            </template>
            {{ item.startIp }}
          </el-descriptions-item>
          <el-descriptions-item v-if="item.endIp">
            <template #label>
              <div class="cell-item">endIp</div>
            </template>
            {{ item.endIp }}
          </el-descriptions-item>
          <el-descriptions-item v-if="item.startPort">
            <template #label>
              <div class="cell-item">startPort</div>
            </template>
            {{ item.startPort }}
          </el-descriptions-item>
          <el-descriptions-item v-if="item.endPort">
            <template #label>
              <div class="cell-item">endPort</div>
            </template>
            {{ item.endPort }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">status</div>
            </template>
            <el-text size="small" :type="getType(item.status)">
              {{ item.status }}</el-text
            >
          </el-descriptions-item>
        </el-descriptions>
      </div>

      <el-pagination
        small
        layout="prev, pager, next"
        :total="TaskListInfo.total"
        v-model:current-page="pageForm.pageNumber"
        :page-count="TaskListInfo.pages"
      />
    </div>
  </div>
  <!-- E Conmponet 任务列表 -->
</template>
<style scoped lang="scss">
#box {
  width: 100%;
  height: auto;
  h1 {
    text-align: center;
  }
  form {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    .el-input {
      width: 600px;
      margin-bottom: 20px;
    }
    .el-textarea__inner {
      width: 600px;
      margin-bottom: 20px;
    }
    .el-button--success {
      background-color: rgb(0, 203, 135);
      color: black;
    }
  }
}
.task {
  padding: 10px;
  margin-top: 5px;
  margin-left: 5px;
  border-radius: 5px;
  border: 1px solid rgb(0, 171, 114);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.el-button {
  margin-left: 5px;

  background-color: rgb(0, 171, 114);
}
</style>
