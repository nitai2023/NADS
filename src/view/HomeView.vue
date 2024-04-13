<script setup lang="ts"></script>
<template>
  <div id="body">
    <nav>
      <p>网络资产探测系统</p>
      <ul>
        <li>关于</li>
        <li>帮助</li>
        <li>简介</li>
      </ul>
    </nav>
    <hr />
    <main>
      <h1>网络资产探测系统</h1>
      <p>
        你说的对，但是网络资产探测系统实现了通过nmap对目标网络进行扫描，并对扫描结果进行可视化
      </p>
      <RouterLink to="/login"><button>登录</button></RouterLink>
    </main>
  </div>
</template>

<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
}
#body {
  width: 90vw;
  height: 100vh;
}
nav {
  height: 44px;
}
nav p {
  display: inline;
  float: left;
}
nav ul {
  display: inline;
  float: right;
}
ul li {
  list-style: none;
  display: inline;
  margin-left: 30px;
}
main {
  padding: 100px;
  color: rgb(93, 155, 0);
}
main h1 {
  margin-bottom: 50px;
}
main p {
  margin-bottom: 30px;
}
main button {
  width: 100px;
  height: 50px;
  border: 1px solid black;
}
</style>
