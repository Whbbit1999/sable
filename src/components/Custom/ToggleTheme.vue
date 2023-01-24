<script lang="ts" setup>
import { useTheme } from '@/store/useTheme'
import { MoonOutline, SunnyOutline } from '@vicons/ionicons5'
const theme = useTheme()
</script>

<template>
  <n-icon size="20" @click="theme.toggleTheme" class="duration-300">
    <MoonOutline v-if="!theme.getTheme" />
    <SunnyOutline v-else />
  </n-icon>
</template>

<style scoped lang="scss"></style>
