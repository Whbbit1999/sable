<script lang="ts" setup>
import Chart from '@/components/ECharts/Chart.vue'
import { lineChartsOptions, pipeChartsOptions, pipeChartsOptions2, radarsChartOptons } from '@/config/charts'
</script>

<template>
  <main class="grid md:grid-cols-2 grid-cols-1 gap-3">
    <n-card class="h-[300px]">
      <Chart :options="lineChartsOptions()" />
    </n-card>
    <n-card class="h-[300px]">
      <Chart :options="pipeChartsOptions()" />
    </n-card>
    <n-card class="h-[300px]">
      <Chart :options="pipeChartsOptions2()" />
    </n-card>
    <n-card class="h-[300px]">
      <Chart :options="radarsChartOptons()" />
    </n-card>
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
