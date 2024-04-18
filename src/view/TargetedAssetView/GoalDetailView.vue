<script></script>
<!-- 目标详情 -->
<template>
  <h1>目标详情</h1>
  <div class="DetailedSearch">
    <el-input placeholder="请输入要执行的任务id"></el-input
    ><el-button class="el-button--add">执行</el-button>
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
