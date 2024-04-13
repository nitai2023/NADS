<script setup lang="ts"></script>
<template>
  <div id="body">
    <nav>
      <p>网络资产探测系统</p>
    </nav>
    <hr />
    <main>
      <h1>网络资产探测系统</h1>
      <p>
        你说的对，但是网络资产探测系统实现了通过nmap对目标网络进行扫描，并对扫描结果进行可视化
      </p>
      <RouterLink to="/login"
        ><el-button style="width: 150px; height: 50px" type="success"
          >登录</el-button
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
  background-image: linear-gradient(
    to left top,
    rgb(99, 99, 99),
    rgb(216, 216, 216)
  );
}

#body * {
  text-align: center;
}
nav {
  height: 44px;
  padding-left: 200px;
  padding-right: 200px;
  padding-top: 10px;
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
  margin-bottom: 50px;
  font-size: 100px;
  text-shadow: 10px 10px 10px #6f6f70;
}
main p {
  margin-bottom: 100px;
  font-size: 30px;
}
</style>
