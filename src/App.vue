<script setup lang="ts">
import { useDark } from '@vueuse/core'
import { NMessageProvider, darkTheme, dateZhCN, zhCN } from 'naive-ui'
import config from './config/config'
import SuspenseFallback from './components/SuspenseFallback.vue'
import WaterMark from './components/WaterMark.vue'

const isDark = useDark()
</script>

<template>
  <NConfigProvider :locale="zhCN" :date-locale="dateZhCN" :theme="isDark ? darkTheme : undefined">
    <NNotificationProvider :max="config.naiveUI.notificationMax">
      <NMessageProvider>
        <Suspense>
          <div>
            <WaterMark />
            <RouterView />
          </div>

          <template #fallback>
            <SuspenseFallback />
          </template>
        </Suspense>
      </NMessageProvider>
    </NNotificationProvider>
  </NConfigProvider>
</template>

<style>
html,
body {
  min-height: 100vh;
  box-sizing: border-box;
}
#app {
  min-height: 100vh;
}
</style>
