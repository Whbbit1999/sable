<script setup lang="ts">
import { useSiteStore } from '@sable/store'
import { NMessageProvider, darkTheme, dateZhCN, lightTheme, zhCN } from 'naive-ui'
import { storeToRefs } from 'pinia'
import config from './config/config'
import SuspenseFallback from './components/SuspenseFallback.vue'
import WaterMark from './components/WaterMark.vue'
import { darkThemeOverrides, lightThemeOverrides } from './config/theme'

const siteStore = useSiteStore()
const { isDark } = storeToRefs(siteStore)
const theme = computed(() => isDark.value ? darkTheme : lightTheme)
const themeOverrides = computed(() => isDark.value ? darkThemeOverrides : lightThemeOverrides)
</script>

<template>
  <NConfigProvider :locale="zhCN" :date-locale="dateZhCN" :theme="theme" :theme-overrides="themeOverrides">
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
