import { RouteRecordRaw } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/index.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/home.vue'),
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about/index.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
  },
] as RouteRecordRaw[]

export default routes
