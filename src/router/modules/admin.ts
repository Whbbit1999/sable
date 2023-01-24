import Layout from '@/layouts/default/index.vue'
import { RouteRecordRaw } from 'vue-router'
export default {
  path: '/admin',
  component: Layout,
  meta: { auth: true },
  children: [
    {
      path: 'home',
      name: 'home',
      component: () => import('@/views/home.vue'),
    },
    {
      path: 'about',
      name: 'about',
      component: () => import('@/views/about/index.vue'),
    },
    // {
    //   path: 'about',
    //   name: 'about',
    //   meta: { menu: { title: '工作台' } },
    //   component: () => import('@/views/about/index.vue'),
    // },
  ],
} as RouteRecordRaw
