import type { App } from 'vue'
import { ref, watchEffect } from 'vue'
import { storeToRefs } from 'pinia'

// 按钮权限
export function registerPermission(app: App) {
  const { permissions } = storeToRefs(usePermissionStore())

  app.directive('permission', {
    created(el: HTMLButtonElement, binding) {
      const { value } = binding

      const buttonPermission = Array.isArray(value) ? value : [value]
      const visible = ref(false)

      watchEffect(() => {
        visible.value = hasIntersection(permissions, buttonPermission)
        el.style.display = visible.value ? '' : 'none'
      })
    },

  })
}

function hasIntersection(permissions: Ref<string[]>, arr2: string[]) {
  const map = new Map()
  permissions.value.forEach(item => map.set(item, true))
  return arr2.some(item => map.get(item))
}
