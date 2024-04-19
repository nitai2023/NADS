<script lang="ts" setup>
import { ref } from "vue";
import { useAssetStore } from "../../store/asset";

const assetStore = useAssetStore();
let scanType = ref("vulnscan");
let taskId = ref(2);
let taskInfo = ref({});
let taskVisible = ref(false);

// 任务详情
const getTaskInfo = async () => {
  taskInfo.value = await assetStore.getTaskInfo(taskId.value);
  // console.log(taskInfo.value);

  taskVisible.value = true;
};

const doScan = async (type: string) => {
  if (type == "vulnscan") await assetStore.scanVuln(taskId.value);
  else await assetStore.scanPort(taskId.value);
};
</script>
<!-- 目标详情 -->
<template>
  <h1>目标详情</h1>
  <div class="DetailedSearch">
    <el-radio-group v-model="scanType">
      <el-radio-button label="漏洞扫描" value="vulnscan" />
      <el-radio-button label="端口扫描" value="portscan" />
    </el-radio-group>
    <el-input placeholder="请输入要执行的任务id" v-model="taskId"></el-input
    ><el-button class="el-button--add" @click="doScan(scanType)"
      >执行</el-button
    >
    <el-button size="small" type="success" @click="getTaskInfo">详情</el-button>
  </div>
  <el-collapse v-if="taskVisible">
    <el-collapse-item name="1">
      <template #title>
        <h3>ip地址:{{ taskInfo.startIp }}~{{ taskInfo.endIp }}</h3>
      </template>
      <template #default>
        <P>任务创建人：{{ taskInfo.createBy }}</P>
        <P>创建时间：{{ taskInfo.createTime }}</P>
        <P>探测时间：{{ taskInfo.startTime }}~{{ taskInfo.endTime }}</P>
        <el-text class="mx-1" type="success"
          >状态：{{ taskInfo.status }}</el-text
        >
        <br />
        <el-text class="mx-1" type="primary">状态：{{ taskInfo.type }}</el-text>
        <h2>端口信息</h2>
        <hr />
        <p v-for="item in taskInfo.portDetailList">
          主机：{{ item.host }} 端口：{{ item.port }} 协议：{{
            item.protocol
          }}
          状态：{{ item.status }}
        </p></template
      >
    </el-collapse-item>
  </el-collapse>
</template>
<style scoped lang="scss">
h1 {
  text-align: center;
}
.el-collapse-item {
  border: 1px solid black;
  margin: 20px;
  padding: 10px;
  .el-collapse-item__header {
    display: flex;
    h1 {
      margin-left: 20px;
      margin-right: 40px;
    }
    .el-badge {
      display: flex;
      margin-right: 10px;
    }
    p {
      margin-left: 60%;
    }
  }
  .el-collapse-item__content {
    h1 {
      color: rgb(0, 171, 114);
    }
    h2 {
      color: rgb(0, 171, 114);
    }
  }
}
.DetailedSearch {
  display: inline-block;
  margin-left: 1%;
  .el-input {
    width: 200px;
  }
  .el-button--add {
    background-color: rgb(0, 203, 135);
    color: black;
  }
}
</style>
