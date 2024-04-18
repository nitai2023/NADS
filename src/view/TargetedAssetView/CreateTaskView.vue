<!-- create task -->
<template>
  <div id="box">
    <h1>创建任务</h1>
    <el-form>
      <el-form-item label=" 任务名称  :" width="400">
        <el-input />
      </el-form-item>
      <el-form-item label="起始IP :">
        <el-input width="400" />
      </el-form-item>
      <el-form-item label="结束IP :">
        <el-input width="400" />
      </el-form-item>
      <el-form-item label="起始端口 :">
        <el-input width="400" />
      </el-form-item>
      <el-form-item label="结束端口 :">
        <el-input width="400" />
      </el-form-item>
      <el-form-item>
        <el-button class="el-button--success">提交</el-button
        ><el-button>保存</el-button>
      </el-form-item>
    </el-form>
  </div>
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
</style>
