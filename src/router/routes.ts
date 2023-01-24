import { RouteRecordRaw } from 'vue-router'

// global routes
const routes = [
  {
    path: '/login',
    name: 'login',
    meta: { guest: true },
    component: () => import('@/views/login/index.vue'),
  },
  { path: '/', redirect: '/admin/home' }, // 默认首页{
  {
    path: '',
    component: () => import('@/layouts/default/index.vue'),
    children: [{ path: '/about', name: 'about', component: () => import('@/views/about/index.vue') }],
  },
] as RouteRecordRaw[]

export default routes
