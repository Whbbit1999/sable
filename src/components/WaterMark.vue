<script lang='ts' setup>
import config from '@/config/config'
</script>

<template>
  <NWatermark
    v-if="config.watermark.show"
    :content="config.watermark.content"
    cross
    fullscreen
    :font-size="config.watermark.fontSize"
    :line-height="config.watermark.lineHeight"
    :width="config.watermark.width"
    :height="config.watermark.height"
    :x-offset="config.watermark.xOffset"
    :y-offset="config.watermark.yOffset"
    :rotate="config.watermark.rotate"
  />
</template>

<style scoped lang='scss'>

</style>
