import Layout from '@/layouts/default/index.vue'
import { RouteRecordRaw } from 'vue-router'
export default {
  path: '/dashboard',
  component: Layout,
  name: 'dashboard',
  meta: {
    auth: true,
    menu: { title: '工作台', key: 'dashboard', order: 1, showParentMenu: false, icon: 'ion:home' },
    type: 'layout',
  },

  children: [
    {
      path: 'home',
      name: 'dashboard.home',
      component: () => import('@/views/dashboard/home.vue'),
      meta: { auth: true, menu: { title: '首页' } },
    },
  ],
} as RouteRecordRaw
