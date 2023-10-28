<script lang="ts" setup>
import { useFullscreen } from '@vueuse/core'

const { toggle, isFullscreen } = useFullscreen()
</script>

<template>
  <NTooltip trigger="hover">
    <template #trigger>
      <div icon-btn @click="toggle">
        <div v-if="!isFullscreen" i-carbon-maximize />
        <div v-else i-carbon-minimize />
      </div>
    </template>
    {{ isFullscreen ? '退出全屏' : '全屏' }}
  </NTooltip>
</template>

<style scoped lang="scss"></style>
