<script lang="ts" setup>
import { useHistoryMenuStore } from '@/store/historyMenuStore'
import { isExternal } from '@/utils'
import { onMounted, ref } from 'vue'
import { RouteLocationNormalizedLoaded, useRoute, useRouter } from 'vue-router'

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
  if (isExternal(route.path)) return

  historyMenuStore.addHistoryMenu(route)
  historyMenu.value = historyMenuStore.getHistoryMenu()
}

const handleRemoveTag = async (tag) => {
  const { isCurrent, currentIndex } = historyMenuStore.removeHistoryMenu(tag.key)
  console.log({ isCurrent, currentIndex })

  // 移除当前元素，页面跳转至上一个标签
  if (isCurrent) {
    router.push({ name: historyMenu.value[currentIndex - 1].key })
  }

  historyMenu.value = historyMenuStore.getHistoryMenu()
}
</script>

<template>
  <nav class="flex gap-2 overflow-auto">
    <n-tag
      v-for="tag in historyMenu"
      :key="tag.key"
      :bordered="false"
      size="large"
      :type="$route.name === tag.key ? 'primary' : undefined"
      class="tag"
      closable
      trigger-click-on-close
      @click="$router.push({ name: tag.key as string })"
      @close.stop="handleRemoveTag(tag)">
      {{ tag.label }}
    </n-tag>
  </nav>
</template>

<style scoped lang="scss">
.tag {
  @apply inline-flex justify-between items-center bg-white px-3 py-2 rounded-md  duration-300 cursor-pointer text-sm;
}
</style>
