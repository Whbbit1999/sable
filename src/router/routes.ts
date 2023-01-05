import { RouteRecordRaw } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: { guest: true },
    component: () => import('@/views/login/index.vue'),
  },
] as RouteRecordRaw[]

export default routes
