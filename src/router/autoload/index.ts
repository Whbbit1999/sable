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

// todo 根据权限过滤[多级菜单的过滤]
function autoload(router: Router) {
  const user = userStore()
  const userInfo = user.userInfo
  console.log('autoload', userInfo)
  routes = routes.map((route) => {
    route.children = route.children.filter((r) => {
      if (r.meta?.permissions?.length) {
        // 需要权限进行访问
        return userInfo.permissions.some((permission) => r.meta.permissions.some((p) => p === permission)) ?? false
      } else {
        // 不需要权限就能访问
        return true
      }
    })
    return route
  })
  routes.forEach((route) => {
    router.addRoute(route)
  })
}
export default autoload

// 动态菜单
async function addDynamicRoutes() {
  try {
  } catch (error) {}
}
