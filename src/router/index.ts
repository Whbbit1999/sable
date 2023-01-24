import { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import autoloadRoutes from './autoload'
import guard from './guard'
import routes from './routes'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes, ...autoloadRoutes],
})

export function setupRouter(app: App) {
  guard(router)
  app.use(router)
}
export default router
