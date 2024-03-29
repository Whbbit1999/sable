<script lang="ts" setup>
import Icon from '@/components/Icon'

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
    <NCard>
      <template #header>
        工作台
      </template>
      <div flex justify-between>
        <div flex items-center gap-3>
          <NAvatar :size="64" :src="userInfo?.avatar" />

          <div h-full flex flex-col justify-start>
            <h2 text-xl>
              您好：{{ userInfo?.name }}， 开始您一天的工作吧！
            </h2>
            <p text="black/50 dark:white/50">
              农历腊月二十九， 天气晴朗， 祝您生活愉快！
            </p>
          </div>
        </div>

        <div w="2/5" flex justify-around gap-4>
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
    </NCard>

    <NCard mt-2>
      <template #header>
        项目
      </template>
      <NGrid :x-gap="8" :y-gap="8" :cols="3">
        <NGridItem v-for="project in projects" :key="project.title">
          <NCard hoverable>
            <template #header>
              <div flex items-center gap-2>
                <Icon :icon="project.icon" size="24" />
                {{ project.title }}
              </div>
            </template>
            <p text="black/40 dark:white/40">
              {{ project.desc }}
            </p>
          </NCard>
        </NGridItem>
      </NGrid>
    </NCard>

    <NCard mt-2>
      <template #header>
        快捷操作
      </template>
      <NGrid :x-gap="8" :y-gap="8" :cols="3">
        <NGridItem v-for="link in links" :key="link.title">
          <NCard
            :to="link.link"
            hoverable
            border="gray/40 1" block h-full w-full rounded-sm p-4 duration-200 hover:shadow-md
          >
            <RouterLink :to="link.link" text-center w-full flex="~ items-center col gap-4">
              <Icon :icon="link.icon" size="24" />
              <h3>{{ link.title }}</h3>
            </RouterLink>
          </NCard>
        </NGridItem>
      </NGrid>
    </NCard>
  </div>
</template>

<style scoped lang="scss"></style>
