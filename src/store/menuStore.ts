import { CacheEnum } from '@/enum/cacheEnums'
import { renderLink, storage } from '@/utils'
import type { MenuOption } from 'naive-ui'
import { defineStore } from 'pinia'
import { RouteLocationNormalized, useRouter } from 'vue-router'

export const menuStore = defineStore('menuStore', {
  state: () => {
    return {
      menus: [] as MenuOption[],
      historyMenu: [] as MenuOption[],
    }
  },

  getters: {
    getMenus() {
      return this.composeMenus()
    },
    getHistoryMenu() {
      return storage.get(CacheEnum.HISTORY_MENU) as any
    },
  },

  actions: {
    // menu
    // 组合menus数据
    composeMenus() {
      const routes = this.getRoutes()
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
    getRoutes() {
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
    },

    // 历史菜单
    // 添加历史菜单
    addHistoryMenu(route: RouteLocationNormalized) {
      if (!route.meta.menu?.showTag) return
      if (route.meta.menu?.showTag && !this.historyMenu.some((i) => i.label === route.meta.menu.title)) {
        let menu = {
          key: route.name,
          label: route.meta.menu.title,
        }
        this.historyMenu.push(menu)
      }

      // TODO 历史菜单刷新后处理
      storage.set(CacheEnum.HISTORY_MENU, this.historyMenu)
    },
    removeHistoryMenu(key) {
      const index = this.historyMenu.findIndex((i) => i.key === key)
      this.historyMenu.splice(index, 1)

      storage.set(CacheEnum.HISTORY_MENU, this.historyMenu)
    },
  },
})
