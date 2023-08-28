import type { MenuOption } from 'naive-ui'
import { defineStore } from 'pinia'
import type { RouteLocationNormalized } from 'vue-router'
import { storage } from '@/utils'
import config from '@/config/config'

export const useHistoryMenuStore = defineStore('history-menu', () => {
  const historyMenu = ref<MenuOption[]>([])

  function getHistoryMenu() {
    return storage.get(CacheEnum.HISTORY_MENU) as MenuOption[]
  }

  function addHistoryMenu(route: RouteLocationNormalized) {
    historyMenu.value = getHistoryMenu()
    const isHas = historyMenu.value?.some(i => i.label === route.meta?.menu?.title)
    const isShow = route.meta.menu?.showTag !== false

    if (!isShow)
      return

    const menu = { key: route?.name, label: route?.meta?.menu?.title }

    if (isShow && !isHas)
      historyMenu.value?.push(menu)

    if (historyMenu.value?.length > config.historyMenuMax)
      historyMenu.value.shift()

    storage.set(CacheEnum.HISTORY_MENU, historyMenu.value)
  }

  function removeHistoryMenu(key) {
    if (historyMenu.value?.length === 1) {
      storage.set(CacheEnum.HISTORY_MENU, historyMenu.value)
      return { isCurrent: false, currentIndex: undefined }
    }

    const index = historyMenu.value?.findIndex(i => i.key === key)
    historyMenu.value.splice(index, 1)
    storage.set(CacheEnum.HISTORY_MENU, historyMenu.value)

    const isCurrent = index === historyMenu.value?.length
    return { isCurrent, currentIndex: index }
  }

  function closeRight(key: string) {
    const index = historyMenu.value?.findIndex(i => i.key === key)
    historyMenu.value.splice(index, historyMenu.value?.length - 1)
    storage.set(CacheEnum.HISTORY_MENU, historyMenu.value)
  }
  function closeOther(key: string) {
    historyMenu.value = historyMenu.value?.filter(i => i.key === key)
    storage.set(CacheEnum.HISTORY_MENU, historyMenu.value)
  }
  function closeLeft(key: string) {
    const index = historyMenu.value?.findIndex(i => i.key === key)
    historyMenu.value.splice(0, index)
    storage.set(CacheEnum.HISTORY_MENU, historyMenu.value)
  }

  return {
    historyMenu,
    addHistoryMenu,
    closeLeft,
    closeOther,
    closeRight,
    getHistoryMenu,
    removeHistoryMenu,
  }
})
