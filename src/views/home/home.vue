<template>
  <div class="h-admin-home">
    <header class="page-header">
      <div class="page-title">
        <HomeIcon class="page-icon" />
        <div>
          <h1>后台管理系统</h1>
          <p>欢迎回来，管理员。以下是近期概况。</p>
        </div>
      </div>
      <button class="primary-btn">刷新数据</button>
    </header>

    <section class="dashboard-grid">
      <div class="card">
        <div class="card-title">今日新增用户</div>
        <div class="card-value">128</div>
      </div>
      <div class="card">
        <div class="card-title">活跃会话</div>
        <div class="card-value">32</div>
      </div>
      <div class="card">
        <div class="card-title">待处理工单</div>
        <div class="card-value">5</div>
      </div>
      <div class="card">
        <div class="card-title">本周销售</div>
        <div class="card-value">¥ 12,340</div>
      </div>
    </section>
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
    min-height: 100vh;
    padding: 32px 24px;
    background-color: #f0f2f5;
  }

  .page-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 24px;
  }

  .page-title {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .page-icon {
    width: 48px;
    height: 48px;
    color: #2563eb;
  }

  .page-title h1 {
    margin: 0;
    font-size: 1.6rem;
    color: #111827;
  }

  .page-title p {
    margin: 4px 0 0;
    color: #6b7280;
    font-size: 0.95rem;
  }

  .primary-btn {
    padding: 0 18px;
    height: 42px;
    border: none;
    border-radius: 8px;
    background: #2563eb;
    color: #fff;
    font-size: 0.95rem;
    cursor: pointer;
  }

  .primary-btn:hover {
    background: #1d4ed8;
  }

  .dashboard-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
  }

  .card {
    padding: 20px;
    border-radius: 12px;
    background: #fff;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .card-title {
    font-size: 0.9rem;
    color: #6b7280;
  }

  .card-value {
    font-size: 1.8rem;
    font-weight: 700;
    color: #111827;
  }
</style>
