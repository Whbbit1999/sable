<script lang="ts" setup>
import { useFullscreen } from '@vueuse/core'

const { toggle, isFullscreen } = useFullscreen()
</script>

<template>
  <n-tooltip trigger="hover">
    <template #trigger>
      <Transition>
        <div icon-btn @click="toggle">
          <div v-if="!isFullscreen" i-carbon-maximize />
          <div v-else i-carbon-minimize />
        </div>
      </Transition>
    </template>
    {{ isFullscreen ? '退出全屏' : '全屏' }}
  </n-tooltip>
</template>

<style scoped lang="scss"></style>
