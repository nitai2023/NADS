<script lang="ts" setup>
import { ElMessage } from "element-plus";
import { useAssetStore } from "../../store/asset";
import { ref } from "vue";
import { ElLoading } from "element-plus";

const assetStore = useAssetStore();
let scanType = ref("vulnscan");
let taskId = ref(2);
let taskInfo = ref({});
let taskVisible = ref(false);

// 任务详情
const getTaskInfo = async () => {
  if (Number(taskId.value)) {
    {
      taskInfo.value = await assetStore.getTaskInfo(Number(taskId.value));
      // console.log(taskInfo.value);
      taskVisible.value = true;
    }
  } else {
    ElMessage({
      type: "info",
      message: "请正确输入任务序列号",
    });
  }
};

const doScan = async (type: string) => {
  if (Number(taskId.value)) {
    const loading = ElLoading.service({
      lock: true,
      text: "任务执行中...",
      background: "rgba(0, 0, 0, 0.7)",
    });

    if (type == "vulnscan") {
      const res = await assetStore.scanVuln(Number(taskId.value));
      let timer = setInterval(() => {
        if (res) {
          loading.close();
          clearInterval(timer);
        }
      }, 1000);
    } else {
      const res = await assetStore.scanPort(taskId.value);
      let timer = setInterval(() => {
        if (res) {
          loading.close();
          clearInterval(timer);
        }
      }, 1000);
    }
    getTaskInfo();
  } else {
    ElMessage({
      type: "info",
      message: "请正确输入任务序列号",
    });
  }
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
    <div>
      <el-input placeholder="请输入要执行的任务id" v-model="taskId"></el-input
      ><el-button class="el-button--add" @click="doScan(scanType)"
        >执行</el-button
      >
    </div>
    <el-button size="small" class="el-button--add" @click="getTaskInfo"
      >详情</el-button
    >
  </div>
  <el-collapse v-if="taskVisible && taskInfo.type == 'portscan'">
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
  <el-collapse v-if="taskVisible && taskInfo.type == 'vulnscan'">
    <el-collapse-item name="1">
      <template #title>
        <h3>任务:{{ taskInfo.name }}</h3>
      </template>
      <template #default>
        <P>任务创建人：{{ taskInfo.createBy }}</P>
        <P>创建时间：{{ taskInfo.createTime }}</P>
        <P>探测时间：{{ taskInfo.startTime }}~{{ taskInfo.endTime }}</P>
        <el-text class="mx-1" type="success"
          >状态：{{ taskInfo.status }}</el-text
        >
        <br />
        <el-text class="mx-1" type="primary">类型：{{ taskInfo.type }}</el-text>
        <h2>漏洞信息：</h2>
        <hr />
        <p v-for="item in taskInfo.vulnerabilityDetailList">
          主机：{{ item.host }} 端口：{{ item.port }} 协议：{{
            item.protocol
          }}
          状态：{{ item.status }}
        </p>
        <p v-if="taskInfo.vulnerabilityDetailList.length == 0">未检测出漏洞</p>
      </template>
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
  display: flex;
  width: 100%;
  justify-content: center;
  > * {
    margin-right: 40px;
  }
  .el-input {
    width: 200px;
  }
  .el-button--add {
    width: 60px;
    height: 32px;
    background-color: rgb(0, 203, 135);
    color: black;
  }
}
</style>
