import { renderLink } from '@/utils'
import type { MenuOption } from 'naive-ui'
import { defineStore } from 'pinia'
import { RouteRecordRaw, useRouter } from 'vue-router'
export const useMenu = defineStore('menu', {
  state: () => {
    return {
      menus: [] as RouteRecordRaw[],
    }
  },

  getters: {
    getMenus() {
      return this.composeMenus()
    },
  },

  actions: {
    // 组合menus数据
    composeMenus() {
      const routes = getMenus()
      const menus: MenuOption[] = []

      routes.forEach((route, index) => {
        if (route.children.length) {
          // 一级菜单
          menus.push({
            label: route.meta.menu.title,
            key: route.name as string,
            children: [],
          })
          // 二级菜单
          route.children.forEach((route) => {
            menus[index].children.push({
              label: renderLink(route.name as string, route.meta.menu.title),
              key: route.name as string,
            })
          })
        } else {
          if (route.name) {
            menus.push({
              label: renderLink(route.name as string, route.meta.menu.title),
              key: route.name as string,
            })
          }
        }
      })

      return menus
    },
  },
})

function getMenus() {
  const router = useRouter()
  const routes = router
    .getRoutes()
    .filter((route) => route.children.length && route?.meta?.menu?.show)
    .map((route) => {
      route.children = route.children.filter((route) => route?.meta?.menu?.show)
      return route
    })
    .sort((a, b) => a.meta.menu.order - b.meta.menu.order)
  return routes
}

function composeMenus() {}
