import { defineStore } from 'pinia'

type Permission = string[]

export const usePermissionStore = defineStore('permissionStore', () => {
  const permissions = ref<Permission>([])

  // 设置新
  function setPermissions(newPermissions: Permission) {
    permissions.value = newPermissions
  }

  // 重置
  function resetPermissions() {
    permissions.value = null
  }

  return {
    permissions,
    setPermissions,
    resetPermissions,
  }
})
