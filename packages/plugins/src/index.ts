import type { App } from 'vue'
import dayjs from './dayjs'
import { setupNaiveUI } from './naive-ui'
import setupPinia from './pinia'
import './unocss'
import setupDirectives from './directives'
import { setupNProgress } from './nprogress'

export function setup(app: App) {
  setupNaiveUI()
  setupPinia(app)
  setupDirectives(app)
  dayjs()
  setupNProgress()
}
