import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layouts/default/index.vue'
export default {
  path: '/admin',
  component: Layout,
  children: [
    {
      path: 'about',
      name: 'about',
      meta: { menu: { title: '工作台' } },
      component: () => import('@/views/about/index.vue'),
    },
  ],
} as RouteRecordRaw
