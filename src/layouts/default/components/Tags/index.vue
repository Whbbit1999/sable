<script lang="ts" setup>
import { menuStore } from '@/store/menuStore'
const historyMenu = menuStore().historyMenu

const handleRemoveTag = (tag) => {
  menuStore().removeHistoryMenu(tag.key)
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
      @close="handleRemoveTag(tag)">
      {{ tag.label }}
    </n-tag>
  </nav>
</template>

<style scoped lang="scss">
.tag {
  @apply inline-flex justify-between items-center bg-white px-3 py-2 rounded-md  duration-300 cursor-pointer text-sm;
}
</style>
