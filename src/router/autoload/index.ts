// 自动注册路由
import { env } from '@/utils'
import { RouteRecordRaw } from 'vue-router'
import autoloadModuleRoutes from './modules'
import getRoutes from './view'

let routes = [] as RouteRecordRaw[]

if (env.VITE_ROUTE_AUTOLOAD) {
  routes = getRoutes()
} else {
  routes = autoloadModuleRoutes()
}

// todo 根据权限过滤

export default routes
