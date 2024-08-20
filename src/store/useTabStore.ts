import { defineStore } from 'pinia'
import type { RouteRecordNormalized, Router } from 'vue-router'
import nprogress from 'nprogress'
import { computed, ref } from 'vue'
import { RouteEnum } from '@sable/enum'
import type { TabDefinition } from '@sable/types'
import config from '@/config/config'

const { historyMenuMax } = config

export const useTabStore = defineStore('tab', () => {
  const tabs = ref<TabDefinition[]>()
  const includesTabs = ref(new Set())
  const excludesTabs = ref(new Set())

  const affixTabs = computed(() => {
    const affixTabs = tabs.value.filter(tab => isAffixTab(tab))
    return affixTabs.sort((a, b) => {
      const orderA = a.meta?.affixTabOrder ?? 0
      const orderB = b.meta?.affixTabOrder ?? 0
      return orderA - orderB
    })
  })
  const getTabs = computed(() => {
    const normalTabs = tabs.value.filter(tab => !isAffixTab(tab))
    return [...affixTabs.value, ...normalTabs].filter(Boolean)
  })
  const getIncludesCacheTabs = computed(() => [...includesTabs.value])
  const getExcludesCacheTabs = computed(() => [...excludesTabs.value])

  function closeTab(tab: TabDefinition) {
    const { fullPath } = tab

    if (isAffixTab(tab))
      return

    const index = tabs.value.findIndex(tab => tab.fullPath === fullPath)
    if (index !== -1) {
      tabs.value.splice(index, 1)
    }
  }

  /**
   * 添加标签页
   * @param routeTab
   */
  function addTab(routeTab: TabDefinition) {
    const tab = cloneTab(routeTab)
    if (!isTabShown(tab))
      return

    const index = tabs.value.findIndex(tab => getTabPath(tab) === getTabPath(routeTab))
    if (index === -1) {
      if (tabs.value.length > historyMenuMax) {
        tabs.value.splice(0, 1)
      }
      else {
        tabs.value.push(tab)
      }
    }
    else {
      tabs.value.splice(index, 1, tab)
    }

    updateCacheTab()
  }

  /**
   * 关闭所有标签页
   * @param router
   */
  async function closeAllTabs(router: Router) {
    tabs.value = tabs.value.filter(tab => isAffixTab(tab))
    updateCacheTab()
    await goToDefaultTab(router)
  }

  /**
   * 关闭左侧标签页
   * @param routeTab
   */
  function closeLeftTabs(routeTab: TabDefinition) {
    const index = tabs.value.findIndex(tab => getTabPath(tab) === getTabPath(routeTab))
    if (index < 1)
      return

    const leftTabs = tabs.value.slice(0, index)
    const paths: string[] = []
    leftTabs.forEach((tab) => {
      if (!isAffixTab(tab)) {
        paths.push(getTabPath(tab))
      }
    })

    batchCloseTabs(paths)
  }

  /**
   * 关闭右侧标签页
   * @param routeTab
   */
  function closeRightTabs(routeTab: TabDefinition) {
    const index = tabs.value.findIndex(tab => getTabPath(tab) === getTabPath(routeTab))

    if (index >= 0 && index < tabs.value.length - 1) {
      const rightTabs = tabs.value.slice(index + 1)
      batchCloseTabs(rightTabs.map(tab => tab.fullPath))
    }
  }

  /**
   * 关闭其他标签页
   * @param tab
   */
  function closeOtherTabs(tab: TabDefinition) {
    const closePaths = tabs.value.map(tab => getTabPath(tab))

    const paths: string[] = []

    for (const path of closePaths) {
      if (getTabPath(tab) === path) {
        continue
      }

      const closeTab = tabs.value.find(tab => tab.fullPath === path)
      if (!closeTab)
        continue

      if (!isAffixTab(closeTab)) {
        paths.push(getTabPath(closeTab))
      }
    }

    batchCloseTabs(paths)
  }

  async function closeCurrentTab(tab: TabDefinition, router: Router) {
    const { currentRoute } = router

    // 要关闭的不是当前页
    if (getTabPath(tab) !== getTabPath(currentRoute.value)) {
      closeTab(tab)
      updateCacheTab()
    }
    const index = tabs.value.findIndex(tab => getTabPath(tab) !== getTabPath(currentRoute.value))
    const after = tabs.value[index + 1]
    const before = tabs.value[index - 1]
    if (after) {
      closeTab(currentRoute.value)
      await goToTab(after, router)
    }
    else if (before) {
      closeTab(currentRoute.value)
      await goToTab(before, router)
    }
    else {
      console.error('error')
    }
  }

  function batchCloseTabs(paths: string[]) {
    tabs.value = tabs.value.filter(tab => !paths.includes(getTabPath(tab)))

    updateCacheTab()
  }

  function pinTab(tab: TabDefinition) {
    const index = tabs.value.findIndex(item => getTabPath(item) === getTabPath(tab))
    if (index !== -1) {
      tab.meta.affixTab = true
      this.tabs.splice(index, 1, tab)
    }
  }

  const renderRouteView = ref(false)

  function updateCacheTab() {
    const cacheMap = new Set<string>()
    for (const tab of tabs.value) {
      const keepAlive = tab.meta.keepAlive
      if (!keepAlive) {
        continue
      }
      cacheMap.add(tab.name as string)
    }

    includesTabs.value = cacheMap
  }

  /**
   * 跳转至默认标签页
   * @param router
   */
  async function goToDefaultTab(router: Router) {
    if (getTabs.value.length <= 0) {
      return await router.push({ path: RouteEnum.HOME })
    }
    const firstTab = getTabs.value[0]
    await goToTab(firstTab, router)
  }

  /**
   * 跳转至指定标签页
   * @param tab
   * @param router
   */
  async function goToTab(tab: TabDefinition, router: Router) {
    const { params, path, query } = tab
    const toParams = {
      path,
      params: params || {},
      query: query || {},
    }
    await router.replace(toParams)
  }

  async function refresh(router: Router) {
    const { currentRoute } = router
    const { name } = currentRoute.value

    this.excludeCachedTabs.add(name as string)
    renderRouteView.value = false
    nprogress.start()

    await new Promise(resolve => setTimeout(resolve, 200))

    this.excludeCachedTabs.delete(name as string)
    renderRouteView.value = true
    nprogress.done()
  }

  function $reset() {
    tabs.value = null
    includesTabs.value = null
    excludesTabs.value = null
  }

  return {
    $reset,

    tabs,
    addTab,
    closeAllTabs,
    closeLeftTabs,
    closeRightTabs,
    closeOtherTabs,
    closeCurrentTab,
    pinTab,

    refresh,

    getTabs,
    affixTabs,
    getExcludesCacheTabs,
    getIncludesCacheTabs,
  }
}, {
  persist: true,
})

function cloneTab(route: TabDefinition): TabDefinition {
  if (!route)
    return route

  const { matched, ...opt } = route

  return {
    ...opt,
    matched: (matched
      ? matched.map(item => ({
        meta: item.meta,
        name: item.name,
        path: item.path,
      }))
      : undefined) as RouteRecordNormalized[],
  }
}

function getTabPath(tab: TabDefinition) {
  return encodeURIComponent(tab.fullPath || tab.path)
}

function isAffixTab(tab: TabDefinition): boolean {
  return tab.meta.affixTab ?? false
}

function isTabShown(tab: TabDefinition): boolean {
  return !tab.meta.hideInTab
}
