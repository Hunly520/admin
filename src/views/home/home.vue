<template>
  <div class="h-admin-home">
    <h1>Home Page</h1>
  </div>
</template>
<script setup lang="ts">
  defineOptions({
    name: 'Home',
  })
</script>
<style scoped>
  .h-admin-home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f2f5;
  }
  .h-admin-home h1 {
    font-size: 2rem;
    color: #333;
  }
</style>
