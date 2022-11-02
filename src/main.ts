import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from './router/index'
import setupPlugins from './plugins/index'
import '@/styles/global.scss'

// -------------------- 处理NaiveUI样式被覆盖的问题 START --------------------
const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)
// -------------------- 处理NaiveUI样式被覆盖的问题 END ----------------------

async function bootstrap(): Promise<void> {
  const app = createApp(App)
  setupRouter(app)
  setupPlugins(app)
  await router.isReady() // 路由全部挂载后

  app.mount('#app')
}

bootstrap()
