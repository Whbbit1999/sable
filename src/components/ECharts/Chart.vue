<script lang="ts" setup>
import * as echarts from 'echarts'

const props = withDefaults(
  defineProps<{
    options: Record<string, any>
    theme?: 'dark' | null
  }>(),
  {
    theme: null,
    options: null,
  },
)

const container = shallowRef(null)
const chart = shallowRef(null)

const resizeObserver = new ResizeObserver(() => {
  chart.value.resize()
})

onMounted(() => {
  chart.value = echarts.init(container.value, props.theme, {
    locale: 'ZH',
    renderer: 'svg',
  })
  chart.value.setOption(props.options)
  resizeObserver.observe(container.value)
})

const { options } = toRefs(props)
watch(
  options,
  (newOptions) => {
    chart.value.setOption(newOptions)
  },
  { deep: true },
)
</script>

<template>
  <div ref="container" w-full h-full />
</template>

<style scoped lang="scss"></style>
