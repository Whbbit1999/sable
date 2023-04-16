import { RouteRecordRaw } from 'vue-router'
import config from '@/config/config'
// global routes
const routes = [
  config.routes.home, // 默认首页
  {
    path: '/login',
    name: 'login',
    meta: { guest: true },
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/:any(.*)',
    name: 'notFound',
    component: () => import('@/views/errors/404.vue'),
  },
] as RouteRecordRaw[]

export default routes
