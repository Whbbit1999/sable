<script lang='ts' setup>
import config from '@/config/config'
</script>

<template>
  <div
    class="w-screen h-screen"
    flex="~ items-center justify-center col"
    bg="white dark:dark" text="dark dark:white"
  >
    <i i-carbon-contour-finding class="animate-spin" text="7xl green" />

    <div>
      <h2 class="text-lg">
        {{ config.loading.title }}
      </h2>
      <span>{{ config.loading.content }}</span>
    </div>
  </div>
</template>

<style scoped lang='scss'>

</style>
