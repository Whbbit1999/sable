<script lang="ts" setup>
import * as echarts from 'echarts'
import { onMounted, ref, toRefs, watch } from 'vue'
const props = withDefaults(
  defineProps<{
    options: Record<string, any>
  }>(),
  {
    options: null,
  },
)

const container = ref(null)
const chart = ref(null)
onMounted(() => {
  chart.value = echarts.init(container.value, '', {
    locale: 'ZH',
    renderer: 'canvas',
    useDirtyRect: true,
    width: 'auto',
    height: 'auto',
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
</script>

<template>
  <div class="e-container" ref="container"></div>
</template>

<style scoped lang="scss">
.e-container {
  width: 100%;
  height: 100%;
}
</style>
