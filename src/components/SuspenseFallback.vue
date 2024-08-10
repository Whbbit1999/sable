<script lang='ts' setup>
import config from '@/config/config'
</script>

<template>
  <div
    class="shading h-screen w-screen"
    flex="~ items-center justify-center col"
    bg="white dark:dark" text="dark dark:white"
  >
    <i text="7xl" i-svg-spinners-blocks-wave opacity-70 />

    <div text="center" m="t-4">
      <h2 text="4xl">
        {{ config.loading.title }}
      </h2>
      <span>{{ config.loading.content }}</span>
    </div>
  </div>
</template>

<style scoped lang='scss'>

</style>
