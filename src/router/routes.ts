import { RouteRecordRaw } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: { guest: true },
    component: () => import('@/views/login/index.vue'),
  },
  { path: '/', redirect: '/admin/home' }, // 默认首页
] as RouteRecordRaw[]

export default routes
