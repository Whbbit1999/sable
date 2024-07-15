<script lang="ts" setup>
import Icon from '@/components/Icon'
import Chart from '@/components/ECharts/Chart.vue'
import { lineChartsOptions, pipeChartsOptions, pipeChartsOptions2, radarsChartOptions } from '@/config/charts'

const userStore = useUserStore()
const userInfo = await userStore.getUserInfo()

const asideInfo = ref([
  { title: '项目', count: 10 },
  { title: '待办', count: 20 },
  { title: '消息', count: 40 },
])

const projects = ref([
  { title: 'GitHub', icon: 'logos:github-icon', desc: '全球最大开源社区' },
  { title: 'Vue', icon: 'logos:vue', desc: '好用的前端开发框架' },
  { title: 'Vite', icon: 'logos:vitejs', desc: '新一代前端构建工具' },
  { title: 'HTML', icon: 'logos:html-5', desc: '前端基石' },
  { title: 'CSS', icon: 'logos:css-3', desc: '用它画一幅画吧' },
  { title: 'TypeScript', icon: 'logos:typescript-icon', desc: '类型提示好用的很' },
])

const links = ref([
  { title: '主控台', icon: 'ion:compass-sharp', link: '#' },
  { title: '外链', icon: 'ion:earth-sharp', link: '#' },
  { title: '编辑器', icon: 'ion:pie-chart', link: '#' },
  { title: '二维码', icon: 'ion:qr-code', link: '#' },
  { title: '视频', icon: 'ion:ios-film', link: '#' },
  { title: '图标', icon: 'ion:ios-construct', link: '#' },
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
              <NNumberAnimation :from="0" :to="info.count" />
            </p>
          </div>
        </div>
      </div>
    </n-card>

    <div mt-2>
      <n-grid x-gap="12" :cols="3">
        <n-gi :span="2">
          <n-card>
            <template #header>
              正在进行的项目
            </template>
            <template #header-extra>
              <n-button quaternary type="primary">
                更多
              </n-button>
            </template>
            <n-grid :x-gap="8" :y-gap="8" :cols="3">
              <n-grid-item v-for="project in projects" :key="project.title">
                <n-card hoverable>
                  <template #header>
                    <div flex items-center gap-2>
                      <Icon :icon="project.icon" size="24" />
                      {{ project.title }}
                    </div>
                  </template>
                  <p text="black/40 dark:white/40">
                    {{ project.desc }}
                  </p>
                </n-card>
              </n-grid-item>
            </n-grid>
          </n-card>

          <n-card mt-2>
            <template #header>
              动态
            </template>
            <template #header-extra>
              <n-button quaternary type="primary">
                更多
              </n-button>
            </template>
            <n-list>
              <n-list-item v-for="i in 10" :key="i">
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
          <n-card>
            <template #header>
              快捷操作
            </template>
            <n-grid :x-gap="8" :y-gap="8" :cols="3">
              <n-grid-item v-for="link in links" :key="link.title">
                <n-card
                  :to="link.link"
                  hoverable
                  border="gray/40 1" block h-full w-full rounded-sm p-4 duration-200 hover:shadow-md
                >
                  <RouterLink :to="link.link" w-full text-center flex="~ items-center col gap-4">
                    <Icon :icon="link.icon" size="24" />
                    <h3>{{ link.title }}</h3>
                  </RouterLink>
                </n-card>
              </n-grid-item>
            </n-grid>
          </n-card>

          <n-card class="mt-2 h-[300px]">
            <Chart :options="lineChartsOptions()" />
          </n-card>

          <n-card mt-2>
            <template #header>
              团队成员
            </template>

            <div class="grid grid-cols-3 gap-2">
              <router-link
                v-for="i in 10" :key="i"
                to="#" class="flex items-center gap-2 rounded-sm bg-gray-200/40 p-2 duration-300 hover:bg-gray-200/80"
              >
                <n-avatar
                  round
                  :size="24"
                  src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
                />
                <h3 class="text-md">
                  Whbbit1999
                </h3>
              </router-link>
            </div>
          </n-card>
        </n-gi>
      </n-grid>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
