import config from '@/config/config'
import { CacheEnum } from '@/enum/cacheEnums'
import { routes as allRoutes } from '@/router/autoload'
import { isExternal, isShowMenu, renderLink, storage } from '@/utils'
import { renderCustomIcon } from '@/utils/renderIcon'
import type { MenuOption } from 'naive-ui'
import { defineStore } from 'pinia'
import { RouteLocationNormalized } from 'vue-router'

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
  },

  actions: {
    // menu 规定第一层一定是布局菜单
    // 组合menus数据
    composeMenus(routes = this.getRoutes()) {
      const menus: MenuOption[] = []
      console.log('routes', routes)
      routes.forEach((route, index) => {
        if (route.children.length) {
          if (route.meta?.menu?.showParentMenu === false && route.children.length === 1) {
            menus.push({
              label: renderLink(route.children[0].name as string, route.children[0].meta?.menu?.title),
              key: route.children[0].name as string,
              icon: renderCustomIcon(route.meta?.menu?.icon),
              path: isExternal(route.children[0].path) ? route.children[0].path : null,
            })
          } else {
            // 一级菜单
            menus.push({
              label: route?.meta?.menu?.title,
              key: route.name as string,
              icon: renderCustomIcon(route.meta?.menu?.icon),
              children: [],
            })
            // 二级菜单
            route.children.forEach((route) => {
              menus[index].children.push({
                label: renderLink(route?.name as string, route?.meta?.menu?.title),
                key: route.name as string,
                icon: config.menu.showChildrenRouteIcon
                  ? renderCustomIcon(route.meta?.menu?.icon ?? config.menu.defaultRouteIcon)
                  : null,
                path: isExternal(route.path) ? route.path : null,
              })
            })
          }
        }
      })

      return menus
    },

    getRoutes() {
      return allRoutes
        .filter((route) => route.children.length && isShowMenu(route))
        .map((route) => {
          route.children = route.children.filter((route) => isShowMenu(route))
          return route
        })
        .sort((a, b) => a.meta?.menu?.order - b.meta?.menu?.order)
    },

    // history menu
    getHistoryMenu() {
      return storage.get(CacheEnum.HISTORY_MENU) as MenuOption[]
    },

    addHistoryMenu(route: RouteLocationNormalized) {
      this.historyMenu = this.getHistoryMenu()
      const isHas = this.historyMenu.some((i) => i.label === route.meta?.menu?.title)
      const isShow = route.meta.menu?.showTag !== false

      if (!isShow) return

      const menu = { key: route?.name, label: route?.meta?.menu?.title }

      if (isShow && !isHas) {
        this.historyMenu.push(menu)
      }

      if (this.historyMenu.length > config.historyMenuMax) {
        this.historyMenu.shift()
      }

      storage.set(CacheEnum.HISTORY_MENU, this.historyMenu)
    },

    removeHistoryMenu(key) {
      if (this.historyMenu.length === 1) {
        storage.set(CacheEnum.HISTORY_MENU, this.historyMenu)
        return { isCurrent: false, currentIndex: undefined }
      }

      const index = this.historyMenu.findIndex((i) => i.key === key)
      this.historyMenu.splice(index, 1)
      console.log(this.historyMenu)
      storage.set(CacheEnum.HISTORY_MENU, this.historyMenu)

      const isCurrent = index === this.historyMenu.length
      return { isCurrent, currentIndex: index }
    },
  },
})
