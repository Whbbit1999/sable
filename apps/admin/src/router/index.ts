import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import autoload from './autoload'
import globalRoutes from './globalRoutes'
import guard from './guard/index'

const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(),
  routes: [...globalRoutes],
})

export async function setupRouter(app: App) {
  const userStore = useUserStore()
  await userStore.getUserInfo()

  autoload(router)

  guard(router)
  app.use(router)
}
export default router
