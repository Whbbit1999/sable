<script lang="ts" setup>
import ResizeObserver from 'resize-observer-polyfill'
import { onBeforeUnmount, onMounted, shallowRef, toRefs, unref, watch } from 'vue'
import type { ECharts, EChartsInitOpts, EChartsOption } from 'echarts'
import { useDebounceFn } from '@vueuse/core'
import echarts from './echarts'

interface Props {
  option: EChartsOption
  theme?: 'dark' | null
  renderer?: EChartsInitOpts['renderer']
}

const props = withDefaults(
  defineProps<Props>(),
  {
    theme: null,
    option: undefined,
    renderer: 'canvas',
  },
)

const { option, theme, renderer } = toRefs(props)

const container = shallowRef(null)
let chart: ECharts | null = null
const resizeObserver = new ResizeObserver(useDebounceFn(() => {
  chart?.resize()
}, 150))

onMounted(() => {
  chart = echarts.init(container.value, theme.value, {
    locale: 'ZH',
    renderer: unref(renderer),
    ssr: false,
  }) as any
  chart?.setOption(unref(option))
  resizeObserver.observe(container.value!)
})

onBeforeUnmount(() => {
  if (chart)
    chart?.dispose()

  resizeObserver.unobserve(container.value!)
})

watch(
  option,
  (newOption) => {
    chart?.setOption(newOption)
  },
  { deep: true },
)
</script>

<template>
  <div ref="container" h-full w-full />
</template>

<style scoped lang="scss"></style>
