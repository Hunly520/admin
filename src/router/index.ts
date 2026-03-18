import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/home/home.vue'
import Login from '@/views/login/login.vue'
import NotFind from '@/views/error/404.vue'
import NoPerssion from '@/views/error/403.vue'

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
    {
      path: '/404',
      component: NotFind,
    },
    {
      path: '/403',
      component: NoPerssion,
    }
  ],
})

export default router
