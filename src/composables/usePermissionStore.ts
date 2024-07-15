import { defineStore } from 'pinia'

export const usePermissionStore = defineStore('permission', {
  state: () => ({
    permissions: [],
  }),
  getters: {

  },
  actions: {
    setPermissions(permissions: string[]) {
      this.permissions = permissions
    },
  },
})
