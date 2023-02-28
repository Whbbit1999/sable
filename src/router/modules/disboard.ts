import Layout from '@/layouts/default/index.vue'
import { RouteRecordRaw } from 'vue-router'
export default {
  path: '/disboard',
  component: Layout,
  name: 'disboard',
  meta: {
    auth: true,
    menu: { title: '工作台', key: 'disboard', order: 1, showParentMenu: false },
    type: 'layout',
  },

  children: [
    {
      path: 'home',
      name: 'disboard.home',
      component: () => import('@/views/dashboard/home.vue'),
      meta: { auth: true, menu: { title: '首页', icon: 'Home' } },
    },
  ],
} as RouteRecordRaw
