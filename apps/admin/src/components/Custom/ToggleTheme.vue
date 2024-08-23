<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

function toggle() {
  toggleDark()
}
</script>

<template>
  <div icon-btn @click="toggle">
    <i v-show="!isDark" i-carbon-moon />
    <i v-show="isDark" i-carbon-sun />
  </div>
</template>

<style scoped lang="scss"></style>
