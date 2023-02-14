import { defineStore } from 'pinia'

export const appStore = defineStore('appStore', {
  state: () => {
    return {
      collapsed: false,
    }
  },
  getters: {},
  actions: {
    async changeCollapsed() {
      this.collapsed = !this.collapsed
      console.log(this.collapsed)
    },
  },
})
