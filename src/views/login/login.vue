<template>
  <div class="h-admin-login">
    <form class="login-form" @submit.prevent="onSubmit">
      <h1>登录</h1>

      <div class="form-row">
        <label for="username">用户名</label>
        <input
          id="username"
          v-model="form.username"
          type="text"
          placeholder="请输入用户名"
          required
        />
      </div>

      <div class="form-row">
        <label for="password">密码</label>
        <input
          id="password"
          v-model="form.password"
          type="password"
          placeholder="请输入密码"
          required
        />
      </div>

      <button type="submit" class="submit-btn">登录</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

defineOptions({
  name: 'Login',
})

const form = reactive({
  username: '',
  password: '',
})

function onSubmit() {
  // TODO: replace with real auth logic
  console.log('login', { username: form.username, password: form.password })
}
</script>

<style scoped>
  .h-admin-login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f2f5;
  }

  .login-form {
    width: min(380px, 90vw);
    padding: 32px;
    border-radius: 12px;
    background: #fff;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .login-form h1 {
    margin: 0;
    font-size: 1.6rem;
    text-align: center;
    color: #1f2937;
  }

  .form-row {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .form-row label {
    font-size: 0.9rem;
    color: #4b5563;
  }

  .form-row input {
    height: 44px;
    padding: 0 12px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-size: 1rem;
    outline: none;
  }

  .form-row input:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.25);
  }

  .submit-btn {
    height: 44px;
    border: none;
    border-radius: 8px;
    background: #2563eb;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
  }

  .submit-btn:hover {
    background: #1d4ed8;
  }
</style>
