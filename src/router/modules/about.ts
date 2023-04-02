import { RouteRecordRaw } from 'vue-router'

export default {
  path: '',
  component: () => import('@/layouts/default/index.vue'),
  name: 'about',
  meta: { menu: { title: '关于', order: 99, showParentMenu: false, icon: 'ion:person' }, type: 'layout' },
  children: [
    {
      path: '/about',
      name: 'about.about',
      component: () => import('@/views/about/index.vue'),
      meta: { menu: { title: '关于' } },
    },
  ],
} as RouteRecordRaw
