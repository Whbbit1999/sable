<script setup lang="ts">
import { zhCN, dateZhCN, darkTheme } from 'naive-ui'
import { themeStore } from './store/themeStore'
import { lightThemeOverrides, darkThemeOverrides } from '@/config/theme'
import config from './config/config'
const theme = themeStore()
</script>

<template>
  <n-config-provider
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme="theme.getTheme === 'dark' ? darkTheme : undefined"
    :theme-overrides="theme === null ? lightThemeOverrides : darkThemeOverrides">
    <n-notification-provider :max="config.naiveUI.notificationMax">
      <Suspense>
        <router-view></router-view>
      </Suspense>
    </n-notification-provider>
  </n-config-provider>
</template>

<style>
html,
body {
  min-height: 100vh;
}
#app {
  min-height: 100vh;
}
</style>
