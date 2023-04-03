import Layout from '@/layouts/default/index.vue'
import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/editor',
  component: Layout,
  name: 'editor',
  meta: {
    auth: true,
    menu: { title: '编辑器', order: 2, showParentMenu: false, icon: 'ion:document' },
    type: 'layout',
  },
  children: [
    {
      path: 'base',
      name: 'editor.base',
      component: () => import('@/views/editor/base.vue'),
      meta: { menu: { title: '富文本编辑器', icon: 'ion:edit' } },
    },
    {
      path: 'markdown',
      name: 'editor.markdown',
      component: () => import('@/views/editor/markdown.vue'),
      meta: {
        permissions: ['admin'],
        menu: { title: 'markdown编辑器', icon: 'ion:logo-markdown' },
      },
    },
  ],
} as RouteRecordRaw
