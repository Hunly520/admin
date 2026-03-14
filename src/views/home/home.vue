<template>
  <div class="h-admin-home">
    <h1>Home Page</h1>
    <HomeIcon style="width: 50px; height: 50px; margin-left: 20px" />
  </div>
</template>
<script setup lang="ts">
  import HomeIcon from '@/assets/icons/home.svg'

  defineOptions({
    name: 'Home',
  })
</script>
<style scoped lang="less">
  .h-admin-home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f2f5;
  }
  .h-admin-home h1 {
    font-size: @primary-font-size;
    color: #333;
  }
</style>
