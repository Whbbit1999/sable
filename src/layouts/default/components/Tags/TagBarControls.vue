<script lang="ts" setup>
const emit = defineEmits(['changeMenu'])
const historyMenuStore = useHistoryMenuStore()
const route = useRoute()
const options = computed(() => [
  // { label: '重新加载', key: 'reload', icon: 'i-carbon-rotate-360' },
  { label: '关闭当前', key: 'close', icon: renderIconesIcon('i-carbon-close-large') },
  { label: '关闭其他', key: 'close-other', icon: renderIconesIcon('i-carbon-pan-horizontal') },
  { label: '关闭左侧', key: 'close-left', icon: renderIconesIcon('i-carbon-arrow-left') },
  { label: '关闭右侧', key: 'close-right', icon: renderIconesIcon('i-carbon-arrow-right') },
])

function renderIconesIcon(icon) {
  return () => h('div', { class: icon })
}
const current = ref(route.name)
watchEffect(() => {
  current.value = route.name
})
const actionMap = new Map([
  ['close', () => { return historyMenuStore.removeHistoryMenu(current.value) }],
  ['close-other', () => { return historyMenuStore.closeOther(current.value) }],
  ['close-left', () => { return historyMenuStore.closeLeft(current.value) }],
  ['close-right', () => { return historyMenuStore.closeRight(current.value) }],
])

function handleSelect(key) {
  const actionFn = actionMap.get(key)
  const result = actionFn && actionFn()
  emit('changeMenu', { key, ...result })
}
</script>

<template>
  <n-dropdown
    trigger="hover"
    :options="options"
    @select="handleSelect"
  >
    <div role="button" icon-btn>
      <div i-carbon-chevron-down />
    </div>
  </n-dropdown>
</template>

<style scoped lang="scss"></style>
