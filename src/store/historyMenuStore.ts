import type { MenuOption } from 'naive-ui'
import { defineStore } from 'pinia'
import type { RouteLocationNormalized } from 'vue-router'
import { storage } from '@/utils'
import config from '@/config/config'

export const useHistoryMenuStore = defineStore('historyMenuStore', {
  state: () => {
    return {
      historyMenu: [] as MenuOption[],
    }
  },
  getters: {},
  actions: {
    // history menu
    getHistoryMenu() {
      return storage.get(CacheEnum.HISTORY_MENU) as MenuOption[]
    },

    addHistoryMenu(route: RouteLocationNormalized) {
      this.historyMenu = this.getHistoryMenu()
      const isHas = this?.historyMenu?.some(i => i.label === route.meta?.menu?.title)
      const isShow = route.meta.menu?.showTag !== false

      if (!isShow)
        return

      const menu = { key: route?.name, label: route?.meta?.menu?.title }

      if (isShow && !isHas)
        this.historyMenu?.push(menu)

      if (this.historyMenu?.length > config.historyMenuMax)
        this.historyMenu.shift()

      storage.set(CacheEnum.HISTORY_MENU, this.historyMenu)
    },

    removeHistoryMenu(key) {
      if (this.historyMenu?.length === 1) {
        storage.set(CacheEnum.HISTORY_MENU, this.historyMenu)
        return { isCurrent: false, currentIndex: undefined }
      }

      const index = this.historyMenu?.findIndex(i => i.key === key)
      this.historyMenu.splice(index, 1)
      storage.set(CacheEnum.HISTORY_MENU, this.historyMenu)

      const isCurrent = index === this.historyMenu?.length
      return { isCurrent, currentIndex: index }
    },

    closeRight(key: string) {
      const index = this.historyMenu?.findIndex(i => i.key === key)
      this.historyMenu.splice(index, this.historyMenu?.length - 1)
      storage.set(CacheEnum.HISTORY_MENU, this.historyMenu)
    },
    closeOther(key: string) {
      this.historyMenu = this.historyMenu?.filter(i => i.key === key)
      storage.set(CacheEnum.HISTORY_MENU, this.historyMenu)
    },
    closeLeft(key: string) {
      const index = this.historyMenu?.findIndex(i => i.key === key)
      this.historyMenu.splice(0, index)
      storage.set(CacheEnum.HISTORY_MENU, this.historyMenu)
    },
  },
})
