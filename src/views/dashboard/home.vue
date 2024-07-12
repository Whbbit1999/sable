<script lang="ts" setup>
import Chart from '@/components/ECharts/Chart.vue'
import { lineChartsOptions, pipeChartsOptions, pipeChartsOptions2, radarsChartOptions } from '@/config/charts'
</script>

<template>
  <main class="grid grid-cols-1 gap-3 md:grid-cols-2">
    <NCard class="h-[300px]">
      <Chart :options="lineChartsOptions()" />
    </NCard>
    <NCard class="h-[300px]">
      <Chart :options="pipeChartsOptions()" />
    </NCard>
    <NCard class="h-[300px]">
      <Chart :options="pipeChartsOptions2()" />
    </NCard>
    <NCard class="h-[300px]">
      <Chart :options="radarsChartOptions()" />
    </NCard>
  </main>
</template>

<style scoped lang="scss">
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
.chart {
  width: 100%;
  height: 100%;
}
</style>
