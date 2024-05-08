import type { RouteRecordRaw } from 'vue-router'
import MenuView from '@/views/customComponents/menu.vue'

export default {
  path: '/menu',
  component: () => import('@/layouts/default/index.vue'),
  name: 'menu',
  meta: { auth: true, menu: { title: '多级菜单', order: 98, icon: 'carbon:document-multiple-01' }, type: 'layout' },
  children: [
    {
      path: 'menu-children-1',
      name: 'menus.1',
      meta: { auth: true, menu: { title: '单个子菜单' } },
      component: MenuView,
    },
    {
      path: 'menu-children-2',
      name: 'menus.2',
      meta: { auth: true, menu: { title: '多个子菜单' } },
      children: [
        {
          path: 'menu-children-2-1',
          name: 'menus.2.1',
          component: MenuView,
          meta: { auth: true, menu: { title: '菜单项1' } },
          children: [],
        },
        {
          path: 'menu-children-2-2',
          name: 'menus.2.2',
          component: MenuView,
          meta: { auth: true, menu: { title: '菜单项2' } },

          children: [
            {
              path: 'menu-children-2-2-1',
              name: 'menus.2.2.1',
              component: MenuView,
              meta: { auth: true, menu: { title: '菜单项1' } },
            },
            {
              path: 'menu-children-2-2-2',
              name: 'menus.2.2.2',
              component: MenuView,
              meta: { auth: true, menu: { title: '菜单项2' } },
            },
          ],
        },
      ],
    },
  ],
} as RouteRecordRaw
