import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      collapsed: false,
      reloadFlag: true,
      aliveKeys: {},
    }
  },
  actions: {
    changeCollapsed() {
      this.collapsed = !this.collapsed
    },
    reloadPage() {
    },
  },
  getters: {
    getCollapsed: state => state.collapsed,
  },
})
