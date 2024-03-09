import type { App } from 'vue'
import { registerRepeatClick } from './repeatClick'
import { registerPermission } from './permission'

// 自定义指令注册
export default function setupDirectives(app: App) {
  registerRepeatClick(app)
  registerPermission(app)
}
