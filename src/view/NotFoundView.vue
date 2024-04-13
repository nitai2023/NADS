<script setup></script>
<!-- 此组件用于展示404不存在页面 -->
<template>
  <div>
    <main>
      <h1>404</h1>
      <h2>Not Found</h2>
    </main>
  </div>
</template>

<style scoped lang="scss">
header {
  margin-top: 8svh;
}

main {
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12svh;

  h1,
  h2 {
    margin-block: 1rem;
    font-weight: 200;
  }

  h1 {
    font-size: clamp(8rem, 10vw, 12rem);
  }

  h2 {
    font-size: 2rem;
  }
}
</style>
