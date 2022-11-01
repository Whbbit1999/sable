import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import layoutRoutes from './autoload'
import routerModules from './modules'
const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...layoutRoutes, ...routerModules],
})

export function setupRouter(app: App) {
  app.use(router)
}
export default router
