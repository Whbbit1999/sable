import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const collapsed = ref(false)
  const reloadFlag = ref(true)
  const aliveKeys = ref({})

  async function changeCollapsed() {
    collapsed.value = !collapsed.value
  }

  async function reloadPage() {
    // TODO
  }

  return {
    collapsed,
    reloadFlag,
    aliveKeys,
    changeCollapsed,
    reloadPage,
  }
})
