<script lang="ts" setup>
import { Chart } from '@sable/components'
import Projects from './components/Projects.vue'
import QuickLinks from './components/QuickLinks.vue'
import { radarChartOptions2 } from '@/config/charts'

const userStore = useUserStore()
const userInfo = await userStore.getUserInfo()

const asideInfo = ref([
  { title: '项目', count: 10 },
  { title: '待办', count: 20 },
  { title: '消息', count: 40 },
])
</script>

<template>
  <div>
    <n-card>
      <template #header>
        工作台
      </template>
      <div flex justify-between>
        <div flex items-center gap-3>
          <n-avatar :size="64" :src="userInfo?.avatar" />

          <div h-full flex flex-col justify-start>
            <h2 text-xl>
              您好：{{ userInfo?.name }}， 开始您一天的工作吧！
            </h2>
            <p text="black/50 dark:white/50">
              农历腊月二十九， 天气晴朗， 祝您生活愉快！
            </p>
          </div>
        </div>

        <div w="1/5" flex justify-around gap-4>
          <div v-for="info in asideInfo" :key="info.title">
            <h2 text-lg>
              {{ info.title }}
            </h2>
            <p text-center text-2xl>
              <n-number-animation :from="0" :to="info.count" />
            </p>
          </div>
        </div>
      </div>
    </n-card>

    <div mt-3>
      <n-grid x-gap="12" :cols="3">
        <n-gi :span="2">
          <Projects />

          <n-card mt-3>
            <template #header>
              动态
            </template>
            <template #header-extra>
              <n-button quaternary type="primary">
                更多
              </n-button>
            </template>
            <n-list>
              <n-list-item v-for="i in 6" :key="i">
                <template #prefix>
                  <n-avatar
                    round
                    size="medium"
                    src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
                  />
                </template>
                <h3>标题</h3>
                <p class="line-clamp-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequuntur, eligendi quisquam fuga sequi atque nisi, blanditiis ea sapiente suscipit facilis odit adipisci tempore, aliquid modi harum vel eum eius?
                </p>
                <div>
                  <span class="text-gray-400">{{ new Date().toLocaleString() }}</span>
                </div>
              </n-list-item>
            </n-list>
          </n-card>
        </n-gi>
        <n-gi>
          <QuickLinks />

          <n-card mt-3>
            <template #header>
              重要情报
            </template>
            <n-carousel show-arrow autoplay>
              <img
                class="carousel-img"
                src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
              >
              <img
                class="carousel-img"
                src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
              >
              <img
                class="carousel-img"
                src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
              >
              <img
                class="carousel-img"
                src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
              >
            </n-carousel>
          </n-card>

          <n-card class="mt-3 h-[300px]">
            <Chart :option="radarChartOptions2()" />
          </n-card>
        </n-gi>
      </n-grid>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
