<script lang="ts" setup>
import { useDark } from '@vueuse/core'

useDark()
</script>

<template>
  <main class="bg-white dark:bg-dark">
    <router-view />
  </main>
</template>

<style scoped lang="scss"></style>
