<script lang="ts" setup>
import { VideoPlayer } from '@sable/components'

import video from '@/assets/video/55248_1669481485.mp4'
</script>

<template>
  <div>
    <VideoPlayer
      class="h-[300px] w-[500px]"
      :url="video"
      poster="//d2zihajmogu5jn.cloudfront.net/elephantsdream/poster.png"
    />
  </div>
</template>

<style scoped lang="scss"></style>
