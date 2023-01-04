import { App } from 'vue'
import { setupNaiveUI } from './naive-ui'
import setupPinia from './pinia'
import dayjs from './dayjs'
import setupTailwindcss from './tailwindcss'

export default function (app: App) {
  setupNaiveUI(app)
  setupPinia(app)
  dayjs()
  setupTailwindcss()
}
