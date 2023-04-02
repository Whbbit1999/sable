import BlankLayout from '@/layouts/blank.vue'
import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/error',
  component: BlankLayout,
  name: 'error',
  meta: { menu: { show: true, title: '错误页面', order: 3, icon: 'ion:ios-close-circle' }, type: 'layout' },

  children: [
    {
      path: '404',
      name: 'error.404',
      component: () => import('@/views/errors/404.vue'),
      meta: { menu: { show: true, title: '404页面' } },
    },

    {
      path: '502',
      name: 'error.502',
      component: () => import('@/views/errors/502.vue'),
      meta: { menu: { show: true, title: '502页面' } },
    },
  ],
} as RouteRecordRaw
