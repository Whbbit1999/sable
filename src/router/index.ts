import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import autoload from './autoload'
import globalRoutes from './globalRoutes'
import guard from './guard/index'

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes: [...globalRoutes],
})

export async function setupRouter(app: App) {
  const user = useUserStore()
  await user.getUserInfo()

  autoload(router)

  guard(router)
  app.use(router)
}
export default router
