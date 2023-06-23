<script setup lang="ts">
import { darkThemeOverrides, lightThemeOverrides } from '@/config/theme'
import { darkTheme, dateZhCN, zhCN } from 'naive-ui'
import config from './config/config'
import { themeStore } from './store/themeStore'
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
  box-sizing: border-box;
}
#app {
  min-height: 100vh;
}
</style>
