import { RouteRecordRaw } from 'vue-router'

// 根据modules文件夹自动注册
export default function autoloadModuleRoutes(): RouteRecordRaw[] {
  const modules: Record<string, any> = import.meta.glob('../modules/**/*.ts', { eager: true })

  const routes = [] as RouteRecordRaw[]

  Object.keys(modules).forEach((key) => {
    routes.push(modules[key].default)
  })

  return routes
}
