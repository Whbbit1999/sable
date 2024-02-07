import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '',
  component: () => import('@/layouts/default/index.vue'),
  name: 'about',
  meta: { menu: { title: '关于', order: 99, icon: 'carbon:information' }, type: 'layout' },
  children: [
    {
      path: '/about',
      name: 'about.about',
      component: () => import('@/views/about/index.vue'),
      meta: { menu: { title: '关于', icon: 'carbon:information' } },
    },
  ],
} as RouteRecordRaw
