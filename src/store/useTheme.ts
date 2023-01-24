import { defineStore } from 'pinia'

// system theme
export const useTheme = defineStore('theme', {
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
