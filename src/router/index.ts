import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/home.vue'
import Login from '@/views/login/login.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/login',
      component: Login,
    },
  ],
})

export default router
