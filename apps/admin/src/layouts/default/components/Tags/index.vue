<script lang="ts" setup>
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import { storeToRefs } from 'pinia'
import { isExternal } from '@sable/utils'
import TagBarControls from './TagBarControls.vue'

const tabStore = useTabStore()
const { tabs } = storeToRefs(tabStore)
const { addTab } = tabStore

const historyMenu = ref()
const router = useRouter()
const route = useRoute()

onMounted(() => {
  addHistoryMenu(route)
})

router.beforeResolve((to) => {
  addHistoryMenu(to)
})

function addHistoryMenu(route: RouteLocationNormalizedLoaded) {
  if (isExternal(route.path))
    return

  addTab(route)
}

async function handleRemoveTag(tag) {
  tabStore.closeCurrentTab(tag, router)
}

function handleChangeMenu({ isCurrent, currentIndex }) {
  if (isCurrent)
    router.push({ name: historyMenu.value[currentIndex - 1].key })

  // historyMenu.value = historyMenuStore.getHistoryMenu
}
</script>

<template>
  <nav
    class="m-2 overflow-x-hidden rounded-md p-2"
    flex="~ gap-2 justify-between"
    bg="white dark:dark"
  >
    <NScrollbar x-scrollable>
      <div flex="~ 1 gap-2 ">
        <NTag
          v-for="tag in tabs"
          :key="tag.key"
          :bordered="false"
          :type="$route.name === tag.key ? 'primary' : 'default'"
          closable
          trigger-click-on-close
          class="text-sm duration-300 cursor-pointer!"
          flex="~ justify-between items-center"
          p="x-3 y-2"
          @click="$router.push({ name: tag.key as string })"
          @close.stop="handleRemoveTag(tag)"
        >
          {{ tag.label }}
        </NTag>
      </div>
    </NScrollbar>

    <div flex="~ gap-1">
      <ReloadPage />

      <TagBarControls />
    </div>
  </nav>
</template>

<style scoped lang="scss"></style>
