<script lang="ts" setup>
import More from './weight/more.vue'
import Refresh from './weight/refresh.vue'
</script>

<template>
  <nav
    class="m-2 overflow-x-hidden rounded-md p-2"
    flex="~ gap-2 justify-between"
    bg="white dark:dark"
  >
    tabs

    <div class="flex-1" />
    <div class="flex items-center">
      <Refresh />

      <More />
    </div>
  </nav>
</template>

<style lang="scss" scoped>

</style>
