import type { MenuOption } from 'naive-ui'
import { defineStore } from 'pinia'
import type { RouteLocationNormalized, RouteRecordName } from 'vue-router'
import { storage } from '@/utils'
import config from '@/config/config'

export const useHistoryMenuStore = defineStore('history-menu', {
  state: () => ({
    historyMenu: [],
  }),
  getters: {
    getHistoryMenu() {
      return storage.get(CacheEnum.HISTORY_MENU) as unknown as MenuOption[] || []
    },
  },
  actions: {
    addHistoryMenu(route: RouteLocationNormalized) {
      this.historyMenu = this.getHistoryMenu

      const isHas = this.historyMenu.some(i => i.label === route.meta?.menu?.title)
      const isShow = route.meta.menu?.showTag !== false
      if (!isShow)
        return

      const menu = { key: route?.name, label: route?.meta?.menu?.title }

      if (isShow && !isHas)
        this.historyMenu?.push(menu as MenuOption)

      if (this.historyMenu?.length > config.historyMenuMax)
        this.historyMenu.shift()

      storage.set(CacheEnum.HISTORY_MENU, this.historyMenu)
    },
    removeHistoryMenu(key: RouteRecordName) {
      if (this.historyMenu?.length === 1) {
        storage.set(CacheEnum.HISTORY_MENU, this.historyMenu)
        return { isCurrent: false, currentIndex: undefined }
      }
      const index = this.historyMenu?.findIndex(i => i.key === key)
      const isCurrent = this.historyMenu[index].key === key

      this.historyMenu.splice(index, 1)
      storage.set(CacheEnum.HISTORY_MENU, this.historyMenu)

      return { isCurrent, currentIndex: index }
    },

    closeRight(key: RouteRecordName) {
      const index = this.historyMenu?.findIndex(i => i.key === key)
      if (index !== -1)
        this.historyMenu?.splice(index + 1, this.historyMenu?.length - 1)

      storage.set(CacheEnum.HISTORY_MENU, this.historyMenu)

      return { isCurrent: false, currentIndex: index }
    },

    closeLeft(key: RouteRecordName) {
      const index = this.historyMenu?.findIndex(i => i.key === key)
      this.historyMenu?.splice(0, index)
      storage.set(CacheEnum.HISTORY_MENU, this.historyMenu)

      return { isCurrent: false, currentIndex: index }
    },

    closeOther(key: RouteRecordName) {
      this.historyMenu = this.historyMenu?.filter(i => i.key === key)
      storage.set(CacheEnum.HISTORY_MENU, this.historyMenu)

      return { isCurrent: false, currentIndex: 0 }
    },

  },
})
