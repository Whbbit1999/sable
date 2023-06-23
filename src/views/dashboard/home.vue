<script lang="ts" setup>
import Chart from '@/components/ECharts/Chart.vue'
import { lineChartsOptions } from '@/config/charts'
</script>

<template>
  <main>
    <n-card class="h-[500px]">
      <Chart :options="lineChartsOptions()" />
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
