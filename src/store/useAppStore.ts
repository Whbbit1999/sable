import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app-store', () => {
  const collapsed = ref(false)
  function toggleCollapsed() {
    collapsed.value = !collapsed.value
  }
  const reloadFlag = ref(true)

  const aliveKeys = ref({})

  function $reset() {
    collapsed.value = false
    reloadFlag.value = true
    aliveKeys.value = {}
  }

  return {
    $reset,

    collapsed,
    toggleCollapsed,

    reloadFlag,
    aliveKeys,
  }
}, {
  persist: true,
})
