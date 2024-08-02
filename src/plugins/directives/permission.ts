import type { App } from 'vue'
import { ref, watchEffect } from 'vue'
import { storeToRefs } from 'pinia'

// 按钮权限
export function registerPermission(app: App) {
  const { permissions } = storeToRefs(usePermissionStore())

  app.directive('permission', {
    mounted(el: HTMLButtonElement, binding) {
      const { value } = binding

      const buttonPermission = Array.isArray(value) ? value : [value]
      const hasPermission = ref(false)

      watchEffect(() => {
        // 没有获取到权限列表
        if (!buttonPermission)
          return
        // 已经不在DOM树中
        if (!el.parentNode)
          return

        // 判断是否需要移除该元素
        hasPermission.value = hasIntersection(permissions, buttonPermission)

        // 没有权限，将元素移除
        if (!hasPermission.value) {
          el.parentNode.removeChild(el)
        }
      })
    },

  })
}

function hasIntersection(permissions: Ref<string[]>, buttonPermission: string[]) {
  const map = new Map()
  permissions.value.forEach(item => map.set(item, true))
  return buttonPermission.some(item => map.has(item))
}
