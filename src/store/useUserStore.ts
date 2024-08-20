import { defineStore } from 'pinia'
import { getUserInfoApi } from '@sable/api'

export const useUserStore = defineStore('user-store', () => {
  const userInfo = ref()
  const permissions = ref()

  async function getUserInfo() {
    const { data } = await getUserInfoApi()

    userInfo.value = data
    return userInfo.value
  }

  async function setPermissions(newPermissions) {
    permissions.value = newPermissions
  }

  async function resetPermissions() {
    permissions.value = null
  }

  function $reset() {
    userInfo.value = null
  }

  return {
    $reset,
    userInfo,
    getUserInfo,

    setPermissions,
    resetPermissions,
  }
}, {
  persist: true,
})
