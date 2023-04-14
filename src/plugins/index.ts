import { App } from 'vue'
import dayjs from './dayjs'
import { setupNaiveUI } from './naive-ui'
import setupPinia from './pinia'
import './tailwindcss'

export default function (app: App) {
  setupNaiveUI(app)
  setupPinia(app)
  dayjs()
  // setupTailwindcss()
  autoRegisterComponent(app)
}

// 自定义全局组建注册
function autoRegisterComponent(app: App) {
  const components = import.meta.glob('../components/Custom/*.vue')
  Object.keys(components).forEach((key) => {
    const name = key.split('/').pop().split('.').shift()
    app.component(name, components[key])
  })
}
