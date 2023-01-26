import Layout from '@/layouts/default/index.vue'
import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/editor',
  component: Layout,
  name: 'editor',
  meta: { auth: true, menu: { show: true, title: '编辑器', key: 'editor', order: 2 } },
  children: [
    {
      path: 'base',
      name: 'editor.base',
      component: () => import('@/views/editor/base.vue'),
      meta: { menu: { show: true, title: '富文本编辑器', key: 'editor.base' } },
    },
    {
      path: 'markdown',
      name: 'editor.markdown',
      component: () => import('@/views/editor/markdown.vue'),
      meta: { permissions: ['admin'], menu: { show: true, title: 'markdown编辑器', key: 'editor.base' } },
    },
  ],
} as RouteRecordRaw
