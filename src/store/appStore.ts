import { defineStore } from 'pinia'
export const appStore = defineStore('appStore', {
  state: () => {
    return {
      collapsed: false,
      reloadFlag: true,
      aliveKeys: {},
    }
  },
  getters: {},
  actions: {
    async changeCollapsed() {
      this.collapsed = !this.collapsed
    },

    async reloadPage() {
      // TODO
    },
  },
})
