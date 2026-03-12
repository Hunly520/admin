import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/home/home.vue'
import Login from '@/views/login/login.vue'

const router = createRouter({
  history: createWebHashHistory(),
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
