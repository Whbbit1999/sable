import Layout from '@/layouts/default/index.vue'
import { RouteRecordRaw } from 'vue-router'
export default {
  path: '/admin',
  component: Layout,
  meta: { auth: true },
  children: [
    {
      path: 'home',
      name: 'admin.home',
      component: () => import('@/views/dashboard/home.vue'),
    },
  ],
} as RouteRecordRaw
