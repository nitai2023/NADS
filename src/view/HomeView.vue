<script setup lang="ts"></script>
<!-- Home View -->
<template>
  <div id="body">
    <nav>
      <p>
        <el-icon><House /></el-icon>
      </p>
    </nav>
    <main>
      <h1>NADS</h1>
      <h2>网络资产探测系统</h2>
      <RouterLink to="/login"
        ><button style="width: 150px; height: 50px">登录</button></RouterLink
      >
      <RouterLink to="/register"
        ><button style="width: 150px; height: 50px">注册</button></RouterLink
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
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(135deg, #f5f7fa 0%, #b1bfd5 100%);
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
  margin-top: 10px;
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
  font-size: 25px;
  border-radius: 30px;
  margin-left: 30px;
  border: 0px;
  color: white;
  background-image: linear-gradient(to top, #37ecba 0%, #4594c3 100%);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}
main button:hover {
  transition: all 0.5s;
  transform: scale(1.05);
  cursor: pointer;
}
</style>
