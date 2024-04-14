<script setup lang="ts"></script>
<!-- Home View -->
<template>
  <div id="body">
    <nav>
      <p>
        <el-icon><House /></el-icon> 主页
      </p>
    </nav>
    <hr />
    <main>
      <h1>NADS</h1>
      <h2>网络资产探测系统</h2>
      <RouterLink to="/login"
        ><el-button style="width: 150px; height: 50px" type="success" round
          >登录</el-button
        ></RouterLink
      >
      <RouterLink to="/register"
        ><el-button style="width: 150px; height: 50px" type="primary" plain
          >注册</el-button
        ></RouterLink
      >
    </main>
  </div>
</template>

<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
}
#body {
  width: 100vw;
  height: 100vh;
  margin: 0;
}

#body * {
  text-align: center;
}
nav {
  height: 44px;
  padding-left: 100px;
  padding-right: 200px;
  font-size: 20px;
}
nav p {
  display: inline;
  float: left;
}
main {
  padding: 100px;
  color: #64ff17;
}
main h1 {
  margin-bottom: 30px;
  font-size: 100px;
  background-image: linear-gradient(to right bottom, #35eb9a, #50a2ff);
  color: transparent;
  background-clip: text;
}
main h2 {
  font-size: 80px;
  color: black;
  margin-bottom: 90px;
}
main button {
  font-size: 30px;
  border-radius: 30px;
  margin-left: 30px;
}
</style>
