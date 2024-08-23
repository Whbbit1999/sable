import { defineStore } from 'pinia'

export const useSiteStore = defineStore('site', () => {
  const isDark = ref(false)

  function $reset() {
    isDark.value = false
  }

  return {
    $reset,
    isDark,
  }
}, {
  persist: true,
})
