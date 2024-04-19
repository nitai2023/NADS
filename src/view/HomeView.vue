<script setup lang="ts"></script>
<!-- Home View -->
<template>
  <div id="body">
    <main class="main">
      <h1>NADS</h1>
      <h2>网络资产探测系统</h2>
      <RouterLink to="/login"
        ><button class="action-button">登录</button></RouterLink
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
  background-image: linear-gradient(to right, #434343 0%, black 100%);
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
.main {
  width: 80vw;
  box-sizing: border-box;
  padding: 100px;
  border-radius: 30px;
  background-color: rgba(90, 90, 90, 0.462);
  transition: all 0.3s;
  &:hover {
    transform: scale(1.01);
  }
}

main h1 {
  margin-bottom: 30px;
  font-size: 100px;
  background-color: rgb(0, 171, 114);

  color: transparent;
  background-clip: text;
}
main h2 {
  font-size: 80px;
  color: rgb(0, 0, 0);
  margin-bottom: 90px;
}
main .action-button {
  font-size: 1rem;
  font-weight: 800;
  padding: 15px 30px;
  margin: 10px;
  border-radius: 30px;
  border: none;
  color: #fff;
  background-color: rgb(0, 171, 114);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: all 0.5s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
}
</style>
