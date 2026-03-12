<template>
  <div class="h-admin-login">
    <h1>Login Page</h1>
  </div>
</template>
<script setup lang="ts">
  defineOptions({
    name: 'Login',
  })
</script>
<style scoped>
  .h-admin-login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f2f5;
  }
  .h-admin-login h1 {
    font-size: 2rem;
    color: #333;
  }
</style>
