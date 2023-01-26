<script lang="ts" setup>
import { themeStore } from '@/store/themeStore'
import { MoonOutline, SunnyOutline } from '@vicons/ionicons5'
const theme = themeStore()
</script>

<template>
  <n-icon size="20" @click="theme.toggleTheme" class="duration-300">
    <MoonOutline v-if="!theme.getTheme" />
    <SunnyOutline v-else />
  </n-icon>
</template>

<style scoped lang="scss"></style>
