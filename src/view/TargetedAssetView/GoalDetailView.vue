<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import { useAssetStore } from "../../store/asset";

const assetStore = useAssetStore();
let scanType = ref("vulnscan");
let taskId = ref(2);

// 任务详情
const getTaskInfo = async () => {
  await assetStore.getTaskInfo(taskId.value);
};

const doScan = async (type: string) => {
  if (type == "vulnscan") await assetStore.scanVuln(taskId.value);
  else await assetStore.scanPort(taskId.value);
  // var data = JSON.stringify({});

  // var config = {
  //   method: "post",
  //   url: "http://8.130.92.122:8080/property/portScan?taskId=2",
  //   headers: {
  //     token:
  //       "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MTM0NjEwNjMsInVzZXJuYW1lIjoiYWRtaW4ifQ.sdo4eu0QI0cWazpsEtYYTzrySUHmWsOTtWoC93mIHtw",
  //     "User-Agent": "Apifox/1.0.0 (https://apifox.com)",
  //     "Content-Type": "application/json",
  //     Accept: "*/*",
  //     Host: "8.130.92.122:8080",
  //     Connection: "keep-alive",
  //   },
  //   data: data,
  // };

  // axios(config)
  //   .then(function (response) {
  //     console.log(JSON.stringify(response.data));
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
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
  <el-collapse>
    <el-collapse-item name="1">
      <template #title>
        <h2>ip地址</h2>
        <el-badge is-dot class="item" color="green"></el-badge>
        <h3>有响应</h3>
        <P>探测时间：</P>
      </template>
      <template #default>
        <h2>端口信息</h2>
        <hr />
        <h3>Banner</h3>
        <p>
          Consistent within interface: all elements should be consistent, such
          as: design style, icons and texts, position of elements, etc.
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
