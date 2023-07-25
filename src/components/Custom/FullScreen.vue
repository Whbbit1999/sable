<script lang="ts" setup>
import { useFullscreen } from '@vueuse/core'
const { toggle, isFullscreen } = useFullscreen()
</script>

<template>
  <n-tooltip trigger="hover">
    <template #trigger>
      <Transition>
        <div @click="toggle" icon-btn>
          <div i-carbon-maximize v-if="!isFullscreen" />
          <div i-carbon-minimize v-else />
        </div>
      </Transition>
    </template>
    {{ isFullscreen ? '退出全屏' : '全屏' }}
  </n-tooltip>
</template>

<style scoped lang="scss"></style>
