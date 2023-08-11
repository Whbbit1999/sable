import type { RouteRecordRaw } from 'vue-router'
import BlankLayout from '@/layouts/blank.vue'

export default {
  path: '/error',
  component: BlankLayout,
  name: 'error',
  meta: { menu: { title: '错误页面', order: 3, icon: 'ion:ios-close-circle' }, type: 'layout' },

  children: [
    {
      path: '404',
      name: 'error.404',
      component: () => import('@/views/errors/404.vue'),
      meta: { menu: { title: '404页面' } },
    },

    {
      path: '500',
      name: 'error.500',
      component: () => import('@/views/errors/500.vue'),
      meta: { menu: { title: '500页面' } },
    },

    {
      path: '502',
      name: 'error.502',
      component: () => import('@/views/errors/502.vue'),
      meta: { menu: { title: '502页面' } },
    },
  ],
} as RouteRecordRaw
