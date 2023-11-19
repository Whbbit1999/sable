import { expect, it } from 'vitest'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useAppStore } from '../useAppStore'

const app = createApp({})
const pinia = createPinia()
app.use(pinia)

it('useAppStore', () => {
  const appStore = useAppStore()

  if (appStore.collapsed) {
    appStore.changeCollapsed()
    expect(appStore.collapsed).toBe(false)
  }
  else {
    appStore.changeCollapsed()
    expect(appStore.collapsed).toBe(true)
  }
})
