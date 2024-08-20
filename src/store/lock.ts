import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLockStore = defineStore('lock-store', () => {
  const isLockScreen = ref<boolean>(false)
  const lockScreenPassword = ref<string | undefined>()

  function lockScreen(password: string) {
    isLockScreen.value = true
    lockScreenPassword.value = password
  }
  function unlockScreen() {
    isLockScreen.value = false
    lockScreenPassword.value = undefined
  }
  function $reset() {
    unlockScreen()
  }

  return {
    $reset,
    isLockScreen,
    lockScreenPassword,
    lockScreen,
    unlockScreen,
  }
}, {
  persist: true,
})
