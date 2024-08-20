import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSiteStore = defineStore('site', () => {
  const isDark = ref(false)

  function setIsDark(is: boolean) {
    isDark.value = is
  }
  function $reset() {
    isDark.value = false
  }

  return {
    $reset,
    isDark,
    setIsDark,
  }
}, {
  persist: true,
})
