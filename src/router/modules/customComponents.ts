import Layout from '@/layouts/default/index.vue'
import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/components',
  component: Layout,
  name: 'components',
  meta: { auth: true, menu: { show: true, title: '自定义组件', key: 'components', order: 10 }, type: 'layout' },

  children: [
    {
      path: 'qrcode',
      name: 'components.qrcode',
      component: () => import('@/views/customComponents/qrcode.vue'),
      meta: { auth: true, menu: { show: true, title: '二维码', showTag: true } },
    },

    {
      path: 'draggable',
      name: 'components.draggable',
      component: () => import('@/views/customComponents/draggable.vue'),
      meta: { auth: true, menu: { show: true, title: '拖拽', showTag: true } },
    },

    {
      path: 'xgplayer',
      name: 'components.xgplayer',
      component: () => import('@/views/customComponents/player.vue'),
      meta: { auth: true, menu: { show: true, title: '视频播放器', showTag: true } },
    },
  ],
} as RouteRecordRaw
