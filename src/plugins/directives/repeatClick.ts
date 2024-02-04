import type { App } from 'vue'

// 重复点击
export function registerRepeatClick(app: App) {
  app.directive('repeatClick', {
    mounted(el, binding) {
      el.addEventListener('click', () => {
        if (!el.disabled) {
          el.disabled = true

          setTimeout(() => {
            el.disabled = true
          }, binding.value || 2000)
        }
      })
    },
  })
}
