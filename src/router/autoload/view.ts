// 根据views目录自动注册
// 路由自动注册
// 只支持文件夹下的.vue布局文件，文件夹暂不支持

import type { RouteRecordRaw } from 'vue-router'

const layouts = import.meta.glob('../../layouts/*.vue', { eager: true })
const views = import.meta.glob('../../views/**/*.vue', { eager: true })

function getRoutes() {
  const layoutRoutes = [] as RouteRecordRaw[]

  Object.entries(layouts).forEach(([file, module]) => {
    const route = getRouteByModule(file, module)
    route.children = getRouteChildren(route)
    layoutRoutes.push(route)
  })
  return layoutRoutes
}

function getRouteChildren(layoutRoute: RouteRecordRaw) {
  const routes = [] as RouteRecordRaw[]

  Object.entries(views).forEach(([file, module]) => {
    if (file.includes(`../views/${layoutRoute.name as string}`)) {
      const route = getRouteByModule(file, module)
      routes.push(route)
    }
  })
  return routes
}

function getRouteByModule(file: string, module: { [key: string]: any }) {
  const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi, '') // 获取layout文件名称
  const route = {
    path: `/${name}`,
    name: name.replace('/', '.'),
    component: module.default,
  } as RouteRecordRaw
  return Object.assign(route, module.default?.route)
}

// export default env.VITE_ROUTE_AUTOLOAD ? getRoutes() : ([] as RouteRecordRaw[])
export default getRoutes
