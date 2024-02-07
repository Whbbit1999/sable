import type { RouteRecordRaw } from 'vue-router'
import Blank from '@/layouts/blank.vue'

export default {
  path: '',
  component: () => import('@/layouts/default/index.vue'),
  name: 'links',
  meta: { menu: { title: '外链', order: 99, showParentMenu: false, icon: 'carbon:attachment' }, type: 'layout' },
  children: [
    {
      name: 'whbit',
      path: 'https://whbbit.cn',
      component: Blank,
      meta: { menu: { title: 'whbbit主页' } },
    },
    {
      name: 'vue',
      path: 'https://cn.vuejs.org/',
      component: Blank,
      meta: { menu: { title: 'vue官网', icon: 'logos:vue' } },
    },
  ],
} as RouteRecordRaw
