import { RouteRecordRaw } from 'vue-router'

// global routes
const routes = [
  {
    path: '/login',
    name: 'login',
    meta: { guest: true },
    component: () => import('@/views/login/index.vue'),
  },
  { path: '/', redirect: '/disboard/home' }, // 默认首页{
] as RouteRecordRaw[]

export default routes
