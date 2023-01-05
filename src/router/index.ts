import { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import layoutRoutes from './autoload'
import routerModules from './modules'
import guard from './guard'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes, ...layoutRoutes, ...routerModules],
})

export function setupRouter(app: App) {
  guard(router)
  app.use(router)
}
export default router
