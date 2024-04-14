<script setup lang="ts">
import Menu from "../../components/Menu.vue";
</script>
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
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;
}
</style>
