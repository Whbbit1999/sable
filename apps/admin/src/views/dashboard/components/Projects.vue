<script lang="ts" setup>
import Icon from '@/components/Icon'

const projects = ref([
  { title: 'GitHub', icon: 'logos:github-icon', desc: '全球最大开源社区' },
  { title: 'Vue', icon: 'logos:vue', desc: '好用的前端开发框架' },
  { title: 'Vite', icon: 'logos:vitejs', desc: '新一代前端构建工具' },
  { title: 'HTML', icon: 'logos:html-5', desc: '前端基石' },
  { title: 'CSS', icon: 'logos:css-3', desc: '用它画一幅画吧' },
  { title: 'TypeScript', icon: 'logos:typescript-icon', desc: '类型提示好用的很' },
])
</script>

<template>
  <n-card>
    <template #header>
      正在进行的项目
    </template>
    <template #header-extra>
      <n-button quaternary type="primary">
        更多
      </n-button>
    </template>
    <n-grid :cols="3" :x-gap="13" :y-gap="13">
      <n-gi v-for="project in projects" :key="project.title">
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
      </n-gi>
    </n-grid>
  </n-card>
</template>

<style>

</style>
