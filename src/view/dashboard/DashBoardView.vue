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
    <main></main>
    <!-- E Comment Menu -->
  </div>
</template>

<style scoped lang="scss">
.dashboard-view {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;
}
</style>
