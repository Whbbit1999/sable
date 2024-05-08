import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layouts/default/index.vue'

export default {
  path: '/access',
  component: Layout,
  name: 'access',
  meta: {
    auth: true,
    menu: { title: '系统管理', order: 80, showParentMenu: false, icon: 'carbon:cics-system-group' },
    type: 'layout',
  },
  children: [
    {
      path: 'base',
      name: 'access.base',
      component: () => import('@/views/access/base.vue'),
      meta: { auth: true, menu: { title: '用户管理', icon: 'i-carbon-user-data' } },
    },
    {
      path: 'base',
      name: 'access.base',
      component: () => import('@/views/access/base.vue'),
      meta: { auth: true, menu: { title: '角色管理', icon: 'i-carbon-scis-control-tower' } },
    },
    {
      path: 'base',
      name: 'access.base',
      component: () => import('@/views/access/base.vue'),
      meta: { auth: true, menu: { title: '菜单管理', icon: 'i-carbon-list-boxes' } },
    },
  ],
} as RouteRecordRaw
