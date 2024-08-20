<script lang="ts" setup>
import { Chart } from '@sable/components'
import { countChartsOptions, lineChartsOptions, pipeChartsOptions, pipeChartsOptions2, radarsChartOptions, viewChartsOptions } from '@/config/charts'

const statistics = [
  {
    title: '访问量',
    count: '12039',
    icon: 'i-carbon-chart-line',
    color: '#1ba784',
    subTitle: '累计访问量',
    subCount: '333222',
  },
  {
    title: '下载量',
    count: '2039',
    icon: 'i-carbon-cloud-download',
    color: '#f1939c',
    subTitle: '累计下载量',
    subCount: '33202',
  },
  {
    title: '浏览量',
    count: '12039',
    icon: 'i-carbon-view',
    color: '#c08eaf',
    subTitle: '累计浏览量',
    subCount: '333222',
  },
  {
    title: '注册量',
    count: '239',
    icon: 'i-carbon-ibm-openshift-container-platform-on-vpc-for-regulated-industries',
    color: '#e9ddb6',
    subTitle: '累计注册量',
    subCount: '580',
  },

]
</script>

<template>
  <div>
    <section class="grid grid-cols-4 mb-3 gap-3">
      <NCard v-for="(statistic, index) in statistics" :key="index" class="">
        <main class="grid grid-cols-[1fr_auto] grid-rows-3 gap-3">
          <h2 class="text-lg">
            {{ statistic.title }}
          </h2>
          <i
            :class="[statistic.icon]"
            :style="{ color: statistic.color }"
            class="col-span-1 row-span-2" text-5xl
          />
          <div class="text-lg">
            <n-number-animation show-separator :from="0" :to="+statistic.count" />
          </div>
          <div>{{ statistic.subTitle }}</div>
          <div><n-number-animation show-separator :from="0" :to="+statistic.subCount" /></div>
        </main>
      </NCard>
    </section>

    <NCard class="mb-3">
      <n-tabs
        class="card-tabs"
        default-value="count"
        size="large"
        animated
        pane-wrapper-style="margin: 0 -4px"
        pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
      >
        <n-tab-pane name="count" tab="流量趋势">
          <div class="h-[500px]">
            <Chart :option="countChartsOptions()" />
          </div>
        </n-tab-pane>
        <n-tab-pane name="view" tab="访问量趋势">
          <div class="h-[500px]">
            <Chart :option="viewChartsOptions()" />
          </div>
        </n-tab-pane>
      </n-tabs>
    </NCard>

    <main class="grid grid-cols-1 gap-3 md:grid-cols-2">
      <NCard class="h-[300px]">
        <Chart :option="lineChartsOptions()" />
      </NCard>
      <NCard class="h-[300px]">
        <Chart :option="pipeChartsOptions()" />
      </NCard>
      <NCard class="h-[300px]">
        <Chart :option="pipeChartsOptions2()" />
      </NCard>
      <NCard class="h-[300px]">
        <Chart :option="radarsChartOptions()" />
      </NCard>
    </main>
  </div>
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
