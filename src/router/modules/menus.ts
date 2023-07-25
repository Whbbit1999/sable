import MenuView from '@/views/customComponents/menu.vue'
import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/menu',
  component: () => import('@/layouts/default/index.vue'),
  name: 'menu',
  meta: { menu: { title: '多级菜单', order: 98, icon: 'ion:md-list-box' }, type: 'layout' },
  children: [
    {
      path: 'menu-children-1',
      name: 'menus.1',
      meta: { menu: { title: '单个子菜单' } },
      component: MenuView,
    },
    {
      path: 'menu-children-2',
      name: 'menus.2',
      meta: { menu: { title: '多个子菜单' } },
      children: [
        {
          path: 'menu-children-2-1',
          name: 'menus.2.1',
          component: MenuView,
          meta: { menu: { title: '菜单项1' } },
          children: [],
        },
        {
          path: 'menu-children-2-2',
          name: 'menus.2.2',
          component: MenuView,
          meta: { menu: { title: '菜单项2' } },

          children: [
            {
              path: 'menu-children-2-2-1',
              name: 'menus.2.2.1',
              component: MenuView,
              meta: { menu: { title: '菜单项1' } },
            },
            {
              path: 'menu-children-2-2-2',
              name: 'menus.2.2.2',
              component: MenuView,
              meta: { menu: { title: '菜单项2' } },
            },
          ],
        },
      ],
    },
  ],
} as RouteRecordRaw
