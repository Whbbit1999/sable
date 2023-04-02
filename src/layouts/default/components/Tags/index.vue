<script lang="ts" setup>
import { menuStore } from '@/store/menuStore'
import { isExternal } from '@/utils'
import { onMounted, ref } from 'vue'
import { RouteLocationNormalizedLoaded, useRoute, useRouter } from 'vue-router'

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
  const path = route.matched[route.matched.length - 1]?.path?.replace('/', '') ?? ''
  if (isExternal(path)) return

  menuStore().addHistoryMenu(route)
  historyMenu.value = menuStore().getHistoryMenu()
}

const handleRemoveTag = async (tag) => {
  const { isCurrent, currentIndex } = menuStore().removeHistoryMenu(tag.key)
  console.log({ isCurrent, currentIndex })

  // 移除当前元素，页面跳转至上一个标签
  if (isCurrent) {
    router.push({ name: historyMenu.value[currentIndex - 1].key })
  }

  historyMenu.value = menuStore().getHistoryMenu()
}
</script>

<template>
  <nav class="flex gap-2 overflow-auto">
    <n-tag
      v-for="tag in historyMenu"
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
