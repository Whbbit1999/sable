import config from '@/config/config'
import { routes as allRoutes } from '@/router/autoload'
import { isExternal, isShowMenu } from '@/utils'
import { renderCustomIcon } from '@/utils/renderIcon'
import { defineStore } from 'pinia'

import type { MenuOption } from 'naive-ui'
import type { RouteRecordNormalized } from 'vue-router'

export const menuStore = defineStore('menuStore', {
  state: () => {
    return {
      menus: [] as MenuOption[],
    }
  },

  getters: {
    getMenus() {
      return this.composeMenus()
    },
  },

  actions: {
    getMenuItem(route: RouteRecordNormalized, basePath = '') {
      const showIcon = route.meta.menu.showIcon ?? true
      let menuItem = {
        label: route.meta?.menu?.title || route.name,
        key: route.name,
        path: resolvePath(basePath, route.path),
        icon: showIcon ? renderCustomIcon(route?.meta?.menu?.icon ?? config.menu.defaultRouteIcon) : null,
        order: route?.meta?.menu?.order || 0,
        children: null,
      }

      const visibleChildren = route.children
        ? route?.children?.filter((item) => item.name && (item?.meta?.menu?.show ?? true))
        : []

      if (!visibleChildren.length) return menuItem

      if (visibleChildren.length === 1) {
        const singleRoute = visibleChildren[0]
        menuItem = {
          ...menuItem,
          label: singleRoute.meta?.menu.title || singleRoute.name,
          key: singleRoute.name,
          path: resolvePath(menuItem.path, singleRoute.path),
          icon: renderCustomIcon(singleRoute.meta?.menu?.icon ?? config.menu.defaultRouteIcon),
        }
        const visibleItems = singleRoute.children
          ? singleRoute.children.filter((item) => item.name && (item?.meta?.menu?.show ?? true))
          : []
        if (visibleItems.length === 1) {
          menuItem = this.getMenuItem(visibleItems[0], menuItem.path)
        } else if (visibleItems.length > 1) {
          menuItem.children = visibleItems
            .map((item) => this.getMenuItem(item, menuItem.path))
            .sort((a, b) => a?.order - b?.order)
        }
      } else {
        menuItem.children = visibleChildren
          .map((item) => this.getMenuItem(item, menuItem.path))
          .sort((a, b) => a?.order - b?.order)
      }

      return menuItem
    },
    // menu 规定第一层一定是布局菜单
    // 组合menus数据
    composeMenus(routes = this.getRoutes()) {
      return routes.map((item) => this.getMenuItem(item)).sort((a, b) => a?.order - b?.order)
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
  },
})

function resolvePath(basePath, path) {
  if (isExternal(path)) return path
  return `/${[basePath, path]
    .filter((path) => path && path !== '/')
    .map((path) => path.replace(/(^\/)|(\/$)/g, ''))
    .join('/')}`
}
