<script lang="ts" setup>
import { useHistoryMenuStore } from '@/store/historyMenuStore'
import { renderCustomIcon } from '@/utils/renderIcon'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    show: boolean
    current: string
    x: number
    y: number
  }>(),
  {
    show: true,
    current: '',
    x: 0,
    y: 0,
  },
)
const historyMenuStore = useHistoryMenuStore()
const emits = defineEmits(['update:show'])
const options = computed(() => [
  { label: '关闭当前', key: 'close', icon: renderCustomIcon('mdi:close', 14) },
  { label: '关闭其他', key: 'close-other', icon: renderCustomIcon('mdi:arrow-expand-horizontal', 14) },
  { label: '关闭左侧', key: 'close-left', icon: renderCustomIcon('mdi:arrow-expand-left', 14) },
  { label: '关闭右侧', key: 'close-right', icon: renderCustomIcon('mdi:arrow-expand-right', 14) },
])
const actionMap = new Map([
  [
    'close',
    () => {
      historyMenuStore.removeHistoryMenu(props.current)
    },
  ],
  [
    'close-other',
    () => {
      historyMenuStore.closeOther(props.current)
    },
  ],
  [
    'close-left',
    () => {
      historyMenuStore.closeLeft(props.current)
    },
  ],
  [
    'close-right',
    () => {
      historyMenuStore.closeRight(props.current)
    },
  ],
])
const handleHiddenDropdown = () => {
  emits('update:show', false)
}
const handleSelect = (key) => {
  console.log(key)
  const actionFn = actionMap.get(key)
  actionFn && actionFn()
  handleHiddenDropdown()
}
</script>

<template>
  <n-dropdown
    :show="show"
    :options="options"
    :x="x"
    :y="y"
    placement="bottom-start"
    :on-clickoutside="handleHiddenDropdown"
    :on-select="handleSelect" />
</template>

<style scoped lang="scss"></style>
