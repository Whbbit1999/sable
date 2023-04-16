import { userStore } from '@/store/userStore'
import { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import autoload from './autoload'
import guard from './guard/index'
import globalRoutes from './globalRoutes'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...globalRoutes],
})

export async function setupRouter(app: App) {
  const user = userStore()
  await user.getUserInfo()

  autoload(router)

  guard(router)
  app.use(router)
}
export default router
