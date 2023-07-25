import Layout from '@/layouts/default/index.vue'
import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/components',
  component: Layout,
  name: 'components',
  meta: { auth: true, menu: { title: '自定义组件', order: 10, icon: 'ion:layers' }, type: 'layout' },

  children: [
    {
      path: 'icon',
      name: 'components.icon',
      component: () => import('@/views/customComponents/icon.vue'),
      meta: { auth: true, menu: { title: '图标', icon: 'ion:ios-construct' } },
    },

    {
      path: 'crudTable',
      name: 'components.crudTable',
      component: () => import('@/views/customComponents/crudTable.vue'),
      meta: { auth: true, menu: { title: 'CRUD表格', icon: 'ion:tablet-landscape' } },
    },

    {
      path: 'uploadImage',
      name: 'components.uploadImage',
      component: () => import('@/views/customComponents/uploadImage.vue'),
      meta: { auth: true, menu: { title: '上传图片', icon: 'ion:md-cloud-upload' } },
    },

    {
      path: 'qrcode',
      name: 'components.qrcode',
      component: () => import('@/views/customComponents/qrcode.vue'),
      meta: { auth: true, menu: { title: '二维码', icon: 'ion:qr-code' } },
    },

    {
      path: 'draggable',
      name: 'components.draggable',
      component: () => import('@/views/customComponents/draggable.vue'),
      meta: { auth: true, menu: { title: '拖拽' } },
    },

    {
      path: 'videoPlayer',
      name: 'components.videoPlayer',
      component: () => import('@/views/customComponents/player.vue'),
      meta: { auth: true, menu: { title: '视频播放器', icon: 'ion:film' } },
    },

    {
      path: 'formFieldList',
      name: 'components.formFieldList',
      component: () => import('@/views/customComponents/form.vue'),
      meta: { auth: true, menu: { title: '自动生成表单', icon: 'ion:md-list-box' } },
    },
  ],
} as RouteRecordRaw
