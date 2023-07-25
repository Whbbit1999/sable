import type { App } from 'vue'
import dayjs from './dayjs'
import { setupNaiveUI } from './naive-ui'
import setupPinia from './pinia'
import './unocss'

export default function (app: App) {
  setupNaiveUI(app)
  setupPinia(app)
  dayjs()
}
