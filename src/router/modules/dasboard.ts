import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layouts/default/index.vue'

export default {
  path: '/dashboard',
  component: Layout,
  name: 'dashboard',
  meta: {
    auth: true,
    menu: { title: '工作台', key: 'dashboard', order: 1, showParentMenu: false, icon: 'carbon:home' },
    type: 'layout',
  },

  children: [
    {
      path: 'home',
      name: 'dashboard.home',
      component: () => import('@/views/dashboard/home.vue'),
      meta: { auth: true, menu: { title: '首页' } },
    },
    {
      path: 'workplace',
      name: 'dashboard.workplace',
      component: () => import('@/views/dashboard/workplace.vue'),
      meta: { auth: true, menu: { title: '工作台' } },
    },
  ],
} as RouteRecordRaw
