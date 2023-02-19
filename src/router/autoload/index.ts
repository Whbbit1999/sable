// 自动注册路由
import { userStore } from '@/store/userStore'
import { env } from '@/utils'
import { Router, RouteRecordRaw } from 'vue-router'
import autoloadModuleRoutes from './modules'
import getRoutes from './view'

let routes = [] as RouteRecordRaw[]

if (env.VITE_ROUTE_AUTOLOAD) {
  routes = getRoutes()
} else {
  routes = autoloadModuleRoutes()
}

// 根据权限过滤，动态拼接菜单
function autoload(router: Router) {
  routes = routes.map((route) => {
    if (route.children) {
      loopChildren(route.children)
    }
    return route
  })

  routes.forEach((route) => {
    router.addRoute(route)
  })
}

function loopChildren(route: RouteRecordRaw[]) {
  const user = userStore()
  const userInfo = user.userInfo

  route.forEach((item) => {
    if (item.children) {
      console.log(item.children) // 有子元素就继续往下查找
      item.children = item.children.filter((r) => {
        if (r.meta?.permissions?.length) {
          // 需要权限进行访问
          return userInfo.permissions.some((permission) => r.meta.permissions.some((p) => p === permission)) ?? false
        } else {
          // 不需要权限就能访问
          return true
        }
      })
      loopChildren(item.children)
    }
  })
}
export default autoload
