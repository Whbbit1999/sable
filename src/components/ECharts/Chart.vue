<script lang="ts" setup>
import echarts from './echarts'

const props = withDefaults(
  defineProps<{
    options: Record<string, any>
    theme?: 'dark' | null
    renderer?: 'svg' | 'canvas'
  }>(),
  {
    theme: null,
    options: null,
    renderer: 'canvas',
  },
)

const container = shallowRef(null)
const chart = shallowRef(null)

const { options, theme, renderer } = toRefs(props)

const resizeObserver = new ResizeObserver(() => {
  chart.value.resize()
})

onMounted(() => {
  chart.value = echarts.init(container.value, theme.value, {
    locale: 'ZH',
    renderer: unref(renderer),
  })
  chart.value.setOption(props.options)
  resizeObserver.observe(container.value)
})

onBeforeUnmount(() => {
  resizeObserver.unobserve(container.value)
})

watch(
  options,
  (newOptions) => {
    chart.value.setOption(newOptions)
  },
  { deep: true },
)
</script>

<template>
  <div ref="container" h-full w-full />
</template>

<style scoped lang="scss"></style>
