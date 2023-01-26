import { defineStore } from 'pinia'

// system theme
export const themeStore = defineStore('themeStore', {
  state: () => {
    return {
      theme: undefined,
    }
  },

  getters: {
    getTheme() {
      return this.theme ?? undefined
    },
  },

  actions: {
    toggleTheme() {
      this.theme = this.theme ? undefined : 'dark'
    },
  },
})
