import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import { App } from 'vue'

export default function setupPinia(app: App) {
  const pinia = createPinia()
  pinia.use(
    createPersistedState({
      auto: true,
      storage: sessionStorage,
    }),
  )
  app.use(pinia)
}
