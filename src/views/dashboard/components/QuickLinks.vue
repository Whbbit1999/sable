<script lang="ts" setup>
import Icon from '@/components/Icon'

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
  <n-card>
    <template #header>
      快捷操作
    </template>
    <n-grid :cols="3" :x-gap="13" :y-gap="13">
      <n-gi v-for="link in links" :key="link.title">
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
      </n-gi>
    </n-grid>
  </n-card>
</template>

<style>

</style>
