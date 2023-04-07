<script lang="ts" setup>
// import useCharts from '@/composables/useCharts'
// import Chart from 'chart.js/auto'
// import { onMounted, ref } from 'vue'
// const { barChartsData, lineChartData } = useCharts()
const cards = [
  { title: '使用人数', count: Math.floor(Math.random() * 100) },
  { title: '使用人数', count: Math.floor(Math.random() * 100) },
  { title: '使用人数', count: Math.floor(Math.random() * 100) },
  { title: '使用人数', count: Math.floor(Math.random() * 100) },
  { title: '使用人数', count: Math.floor(Math.random() * 100) },
  { title: '使用人数', count: Math.floor(Math.random() * 100) },
]

// onMounted(() => {
//   const ctx = document.getElementById('myChart') as HTMLCanvasElement
//   new Chart(ctx, barChartsData)

//   const lineChart = document.getElementById('lineChart') as HTMLCanvasElement
//   new Chart(lineChart, lineChartData)
// })
</script>

<template>
  <main>
    <section class="grid grid-cols-3 gap-2">
      <n-card :title="card.title" size="medium" v-for="card in cards">{{ card.count }}</n-card>
    </section>
    <div v-for="i in 100">{{ i }}</div>
    <!-- <section class="grid grid-cols-1 gap-2 mt-3 md:grid-cols-2">
      <canvas id="myChart"></canvas>
    </section>
    <canvas id="lineChart"></canvas>
    <section class="mt-3"></section> -->
  </main>
</template>

<style scoped lang="scss"></style>
