<script lang="ts" setup>
import { useWindowSize } from '@vueuse/core'
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
onMounted(() => {
  chart.value = echarts.init(container.value, props.theme, {
    locale: 'ZH',
    renderer: 'svg',
  })
  chart.value.setOption(props.options)
})

const { options } = toRefs(props)
watch(
  options,
  (newOptions) => {
    chart.value.setOption(newOptions)
  },
  { deep: true },
)

const { width, height } = useWindowSize()
const timer = ref(null)
watch([width, height], () => {
  if (!timer.value) {
    timer.value = setTimeout(() => {
      chart.value.resize()
      timer.value = null
    }, 500)
  }
})

onUnmounted(() => {
  timer.value = null
})
</script>

<template>
  <div ref="container" w-full h-full />
</template>

<style scoped lang="scss"></style>
