<script setup lang="ts">
import Menu from "../../components/Menu.vue";
</script>
<!-- 组件：仪表盘 -->
<template>
  <div class="dashboard-view">
    <!-- S Comment Menu -->
    <aside>
      <Menu></Menu>
    </aside>
    <main>
      <RouterView></RouterView>
    </main>
    <!-- E Comment Menu -->
  </div>
</template>

<style scoped lang="scss">
.dashboard-view {
  display: flex;
  height: 100vh;

  aside {
    height: 100%;

    .menu-container {
      height: 100%;
    }
  }

  main {
    width: 100%;
    div {
      width: 100%;
    }
  }
}
</style>
