<template>
  <div class="h-admin-404">
    <div class="card">
      <div class="code">404</div>
      <div class="message">
        抱歉，您访问的页面不存在。
        <br />
        请检查网址是否正确，或者返回首页继续浏览。
      </div>
      <div class="actions">
        <router-link to="/" class="btn">返回首页</router-link>
        <button class="btn secondary" @click="goBack">返回上一页</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goBack() {
  window.history.length > 1 ? router.back() : router.push('/')
}
</script>

<style scoped>
  .h-admin-404 {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px 16px;
    background: #f0f2f5;
  }

  .card {
    max-width: 420px;
    width: 100%;
    padding: 36px 30px;
    border-radius: 16px;
    background: #ffffff;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    text-align: center;
  }

  .code {
    font-size: 5.5rem;
    font-weight: 800;
    color: #1f2937;
    letter-spacing: 0.08em;
  }

  .message {
    margin-top: 18px;
    font-size: 1.05rem;
    color: #4b5563;
    line-height: 1.6;
  }

  .actions {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: 28px;
    flex-wrap: wrap;
  }

  .btn {
    min-width: 130px;
    padding: 10px 16px;
    border-radius: 10px;
    border: none;
    background: #2563eb;
    color: #fff;
    font-size: 0.95rem;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .btn.secondary {
    background: #e5e7eb;
    color: #374151;
  }

  .btn:hover {
    filter: brightness(0.95);
  }
</style>
