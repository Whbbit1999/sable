<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import { themeStore } from './store/themeStore'
const theme = themeStore()
</script>

<template>
  <n-config-provider :theme="theme.getTheme === 'dark' ? darkTheme : undefined">
    <Suspense>
      <router-view></router-view>
    </Suspense>
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
