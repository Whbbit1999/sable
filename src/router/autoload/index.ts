// 自动注册路由
import type { RouteRecordRaw, Router } from 'vue-router'
import autoloadModuleRoutes from './modules'
import getRoutes from './view'
import { env } from '@/utils'

let _routes = [] as RouteRecordRaw[]

if (env.VITE_ROUTE_AUTOLOAD)
  _routes = getRoutes()
else
  _routes = autoloadModuleRoutes()

// 根据权限过滤，动态拼接菜单
function autoload(router: Router) {
  _routes = _routes.map((route) => {
    if (route.children)
      loopChildren(route.children)

    return route
  })

  _routes.forEach((route) => {
    router.addRoute(route)
  })
}

function loopChildren(route: RouteRecordRaw[]) {
  const userStore = useUserStore()
  const userInfo = userStore.userInfo

  route.forEach((item) => {
    if (item.children) {
      item.children = item.children.filter((r) => {
        if (r.meta?.permissions?.length)
          // 需要权限进行访问
          return userInfo.permissions.some(permission => r.meta.permissions.includes(permission)) ?? false

        // 不需要权限就能访问
        return true
      })

      loopChildren(item.children)
    }
  })
}

const routes = _routes
export default autoload
export { routes }
