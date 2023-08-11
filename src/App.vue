<script setup lang="ts">
import { useDark } from '@vueuse/core'
import { darkTheme, dateZhCN, zhCN } from 'naive-ui'
import config from './config/config'

const isDark = useDark()
</script>

<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN" :theme="isDark ? darkTheme : undefined">
    <n-notification-provider :max="config.naiveUI.notificationMax">
      <Suspense>
        <router-view />
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
