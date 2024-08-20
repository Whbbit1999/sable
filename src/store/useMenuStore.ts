import { defineStore } from 'pinia'
import type { MenuOption } from 'naive-ui'
import type { RouteRecordNormalized, RouteRecordRaw } from 'vue-router'
import { ref } from 'vue'
import { isExternal, isShowMenu, renderCustomIcon } from '@sable/utils'
import config from '@/config/config'
import { routes as allRoutes } from '@/router/autoload'

export const useMenuStore = defineStore('menu', () => {
  const menu = ref([])

  function resolvePath(basePath, path) {
    if (isExternal(path))
      return path

    return `/${[basePath, path]
      .filter(path => path && path !== '/')
      .map(path => path.replace(/(^\/)|(\/$)/g, ''))
      .join('/')}`
  }

  function getMenuItem(route: RouteRecordNormalized | RouteRecordRaw, basePath = '', showChildrenIcon = true) {
    const showIcon = route.meta.menu.showIcon ?? showChildrenIcon ?? true
    let menuItem: MenuOption = {
      label: route.meta?.menu?.title || route.name,
      key: route.name as string,
      path: resolvePath(basePath, route.path),
      icon: showIcon ? renderCustomIcon(route?.meta?.menu?.icon ?? config.menu.defaultRouteIcon) : null,
      order: route?.meta?.menu?.order || 0,
      children: null,
    }

    const visibleChildren = route.children
      ? route?.children?.filter(item => item.name && (item?.meta?.menu?.show ?? true))
      : []

    if (!visibleChildren.length) {
      delete menuItem.children
      return menuItem
    }

    if (visibleChildren.length === 1) {
      const singleRoute = visibleChildren[0]
      menuItem = {
        ...menuItem,
        label: singleRoute.meta?.menu.title || singleRoute.name,
        key: singleRoute.name as string,
        path: resolvePath(menuItem.path, singleRoute.path),
        icon: showChildrenIcon ? renderCustomIcon(singleRoute.meta?.menu?.icon ?? config.menu.defaultRouteIcon) : null,
      }
      const visibleItems = singleRoute.children
        ? singleRoute.children.filter(item => item.name && (item?.meta?.menu?.show ?? true))
        : []
      if (visibleItems.length === 1) {
        menuItem = getMenuItem(visibleItems[0], menuItem.path as string, config.menu.showChildrenRouteIcon)
      }
      else if (visibleItems.length > 1) {
        menuItem.children = visibleItems
          .map(item => getMenuItem(item, menuItem.path as string, config.menu.showChildrenRouteIcon))
          .sort((a, b) => a?.order - b?.order)
      }
    }
    else {
      menuItem.children = visibleChildren
        .map(item => getMenuItem(item, menuItem.path as string, config.menu.showChildrenRouteIcon))
        .sort((a, b) => a?.order - b?.order)
    }

    return menuItem
  }
  function composeMenus(routes = getRoutes()) {
    menu.value
     = routes.map(item => getMenuItem(item)).sort((a, b) => a?.order - b?.order)
    return menu.value
  }

  // menu 规定第一层一定是布局菜单
  // 组合menus数据
  function getRoutes() {
    return allRoutes
      .filter(route => route.children.length && isShowMenu(route))
      .map((route) => {
        route.children = route.children.filter(route => isShowMenu(route))
        return route
      })
      .sort((a, b) => a.meta?.menu?.order - b.meta?.menu?.order)
  }

  function $reset() {
    menu.value = []
  }
  return {
    $reset,
    menu,

    composeMenus,
  }
}, {
  persist: true,
})
