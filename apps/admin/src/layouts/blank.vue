<script lang="ts" setup>
import { useDark } from '@vueuse/core'

useDark()
</script>

<template>
  <main class="bg-white dark:bg-dark">
    <RouterView />
  </main>
</template>

<style scoped lang="scss"></style>
