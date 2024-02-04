import type { App } from 'vue'
import { registerRepeatClick } from './repeatClick'
import { registerButtonAccess } from './buttonAccess'

// 自定义指令注册
export default function setupDirectives(app: App) {
  registerRepeatClick(app)
  registerButtonAccess(app)
}
