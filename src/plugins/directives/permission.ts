import type { App } from 'vue'
import { ref, watchEffect } from 'vue'
import { storeToRefs } from 'pinia'

/**
 * 根据用户所有权限判断该元素是否展示
 * v-permission="" 示例：
 *  - <div v-permission="'admin'"> admin </div>
 *  - <div v-permission="['admin', 'user']"> user </div>
 * @param app
 */
export function registerPermission(app: App) {
  const { permissions } = storeToRefs(usePermissionStore())

  app.directive('permission', {
    mounted(el: HTMLButtonElement, binding) {
      const { value } = binding

      const buttonPermission = Array.isArray(value) ? value : [value]
      const hasPermission = ref(false)

      // 没有获取到权限列表
      if (!hasButtonPermission(buttonPermission))
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
    },

  })
}

function hasIntersection(permissions: Ref<string[]>, buttonPermission: string[]): boolean {
  const map = new Map()
  permissions.value.forEach(item => map.set(item, true))
  return buttonPermission.some(item => map.has(item))
}

// 判断元素中是否设置了需要的权限组
function hasButtonPermission(buttonPermission: string[]): boolean {
  return buttonPermission.filter(p => Boolean(p)).length > 0
}
