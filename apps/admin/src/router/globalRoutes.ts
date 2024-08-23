import type { RouteRecordRaw } from 'vue-router'
import config from '@/config/config'

// global routes
const routes = [
  config.routes.home, // 默认首页

  {
    path: '/auth',
    name: 'auth',
    component: () => import('@/layouts/auth/index.vue'),
    children: [
      {
        path: 'login',
        name: 'auth.login',
        meta: { guest: true },
        component: () => import('@/views/auth/login.vue'),
      },
      {
        path: 'mobile',
        name: 'auth.mobile',
        meta: { guest: true },
        component: () => import('@/views/auth/mobile-login.vue'),
      },
      {
        path: 'qrcode',
        name: 'auth.qrcode',
        meta: { guest: true },
        component: () => import('@/views/auth/qrcode-login.vue'),
      },
      {
        path: 'register',
        name: 'auth.register',
        meta: { guest: true },
        component: () => import('@/views/auth/register.vue'),
      },
      {
        path: 'forgetPassword',
        name: 'auth.forgetPassword',
        meta: { guest: true },
        component: () => import('@/views/auth/forgetPassword.vue'),
      },
    ],
  },

  {
    path: '/:any(.*)',
    name: 'notFound',
    component: () => import('@/views/errors/404.vue'),
  },
] as RouteRecordRaw[]

export default routes
