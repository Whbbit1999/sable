import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layouts/default/index.vue'

export default {
  path: '/user',
  component: Layout,
  name: 'user',
  meta: {
    auth: true,
    menu: { title: '编辑器', order: 80, showParentMenu: false, icon: 'ion:person' },
    type: 'layout',
  },
  children: [
    {
      path: 'base',
      name: 'user.base',
      component: () => import('@/views/user/base.vue'),
      meta: { menu: { title: '个人空间', icon: 'ion:person' } },
    },
  ],
} as RouteRecordRaw
