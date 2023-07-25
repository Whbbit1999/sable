<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const { toggleTheme } = themeStore()

function toggle() {
  toggleDark()
  toggleTheme()
}
</script>

<template>
  <div icon-btn @click="toggle">
    <i i-carbon-moon v-show="!isDark" />
    <i i-carbon-sun v-show="isDark" />
  </div>
</template>

<style scoped lang="scss"></style>
