<!-- create task -->
<template>
  <div id="box">
    <h1>创建任务</h1>
    <el-form>
      <el-form-item label=" 任务名称  :" width="400">
        <el-input />
      </el-form-item>
      <el-form-item label="自定义目标 :" width="400">
        <el-input :rows="3" type="textarea" />
      </el-form-item>
      <el-form-item label="自定义端口 :">
        <el-input :rows="4" type="textarea" width="400" />
      </el-form-item>
      <el-form-item>
        <el-button class="el-button--success">提交</el-button
        ><el-button>保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style>
#box {
  width: 100%;
  height: auto;
  h1 {
    padding-left: 30px;
  }
  form {
    padding-left: 30px;
    .el-input {
      width: 800px;
      margin-bottom: 20px;
    }
    .el-textarea__inner {
      width: 800px;
      margin-bottom: 20px;
    }
    .el-button--success {
      background-color: rgb(0, 203, 135);
      color: black;
    }
  }
}
</style>
