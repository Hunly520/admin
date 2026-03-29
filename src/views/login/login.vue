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

      <div class="form-row rememberMe-row">
        <label>
          <input
            type="checkbox"
            v-model="form.rememberMe"
          />
          记住密码
        </label>
      </div>

      <button type="submit" class="submit-btn">登录</button>
      <div class="register-link">
        还没有账号？
        <a href="/register">立即注册</a>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import { login } from '@/api/login'

defineOptions({
  name: 'Login',
})

const form = reactive({
  username: '',
  password: '',
  rememberMe: false,
})

onMounted(() => {
  const saved = localStorage.getItem('login-rememberMe')
  if (saved) {
    const data = JSON.parse(saved)
    form.username = data.username || ''
    form.password = data.password || ''
    form.rememberMe = true
  }
})

const onSubmit = async () => {
  const { username, password, rememberMe } = form
  if (rememberMe) {
    localStorage.setItem('login-rememberMe', JSON.stringify({ username, password }))
  } else {
    localStorage.removeItem('login-rememberMe')
  }
  const res = await login(username, password)
  if(res) {
    console.log(res);
  }
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

  .rememberMe-row {
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }

  .form-row label {
    font-size: 0.9rem;
    color: #4b5563;
  }

  .form-row input[type="text"],
  .form-row input[type="password"] {
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

  .register-link {
    margin-top: 8px;
    text-align: center;
    font-size: 0.95rem;
    color: #6b7280;
  }
  .register-link a {
    color: #2563eb;
    text-decoration: none;
    margin-left: 4px;
  }
  .register-link a:hover {
    text-decoration: underline;
  }
</style>
