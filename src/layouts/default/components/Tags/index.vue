<script lang="ts" setup>
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import TagBarControls from './TagBarControls.vue'
import { isExternal } from '@/utils'

const historyMenu = ref()
const router = useRouter()
const route = useRoute()
const historyMenuStore = useHistoryMenuStore()
onMounted(() => {
  addHistoryMenu(route)
})

router.beforeResolve((to) => {
  addHistoryMenu(to)
})

function addHistoryMenu(route: RouteLocationNormalizedLoaded) {
  if (isExternal(route.path))
    return

  historyMenuStore.addHistoryMenu(route)
  historyMenu.value = historyMenuStore.getHistoryMenu()
}

async function handleRemoveTag(tag) {
  const { isCurrent, currentIndex } = historyMenuStore.removeHistoryMenu(tag.key)

  // 移除当前元素，页面跳转至上一个标签
  if (isCurrent)
    router.push({ name: historyMenu.value[currentIndex - 1].key })

  historyMenu.value = historyMenuStore.getHistoryMenu()
}

function handleChangeMenu({ isCurrent, currentIndex }) {
  if (isCurrent)
    router.push({ name: historyMenu.value[currentIndex - 1].key })

  historyMenu.value = historyMenuStore.getHistoryMenu()
}
</script>

<template>
  <nav
    class="m-2 p-2 rounded-md overflow-x-hidden"
    flex="~ gap-2 justify-between"
    bg="white dark:dark"
  >
    <NScrollbar x-scrollable>
      <div flex="~ 1 gap-2 ">
        <NTag
          v-for="tag in historyMenu"
          :key="tag.key"
          :bordered="false"
          :type="$route.name === tag.key ? 'primary' : 'default'"
          closable
          trigger-click-on-close
          class="duration-300 cursor-pointer! text-sm"
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

      <TagBarControls @change-menu="handleChangeMenu" />
    </div>
  </nav>
</template>

<style scoped lang="scss"></style>
