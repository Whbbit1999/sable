import type { App } from 'vue'

// 按钮权限
export function registerButtonAccess(app: App) {
  app.directive('buttonAccess', {
    mounted(el, binding) {
      const { value } = binding
      const permissionList = value.split(',')

      // TODO 权限获取
      // const store = useStore()
      // const currentUser = store.state.user.userInfo
      // const permissions = currentUser.permissions
      let hasPermission = false
      const permissions = ['1', '2'] // 假设当前用户权限为1,2

      if (permissions.length)
        hasPermission = permissions.some(permission => permissionList.includes(permission))

      el.style.display = hasPermission ? '' : 'none'
    },
  })
}
