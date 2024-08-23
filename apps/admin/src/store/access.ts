import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAccessStore = defineStore('access-store', () => {
  const accessCodes = ref<string[]>([])
  function setAccessCodes(codes: string[]) {
    accessCodes.value = codes
  }

  const accessMenus = ref<string[]>([])
  function setAccessMenus(menus: string[]) {
    accessMenus.value = menus
  }

  const accessRoutes = ref<string[]>([])
  function setAccessRoutes(routes: string[]) {
    accessRoutes.value = routes
  }

  const accessToken = ref<string | null>(null)
  function setAccessToken(token: string | null) {
    accessToken.value = token
  }

  const loginExpired = ref<boolean>(false)
  function setLoginExpired(isExpired: boolean) {
    loginExpired.value = isExpired
  }

  const refreshToken = ref<string | null>(null)
  function setRefreshToken(token: string | null) {
    refreshToken.value = token
  }

  function $reset() {
    accessCodes.value = null
    accessMenus.value = null
    accessRoutes.value = null
    accessToken.value = null
    refreshToken.value = null
  }

  return {
    $reset,

    accessCodes,
    setAccessCodes,
    accessMenus,
    setAccessMenus,
    accessRoutes,
    setAccessRoutes,
    accessToken,
    setAccessToken,
    loginExpired,
    setLoginExpired,
    refreshToken,
    setRefreshToken,
  }
}, {
  persist: true,
})
