<script lang="ts" setup>
import Artplayer from 'artplayer'

const props = withDefaults(defineProps<{
  url: string
  poster: string
  theme?: string
  volume?: number
  isLive?: boolean
  autoplay?: boolean
  screenshot?: boolean
  miniProgressBar?: boolean
}>(), {
  theme: '#18a058',
  volume: 0.5,
  isLive: false,
  autoplay: false,
  screenshot: true,
  miniProgressBar: true,
})

const artplayer = ref()

function initPlayer() {
  // eslint-disable-next-line no-new
  new Artplayer({
    container: artplayer.value,
    url: props.url,
    poster: props.poster,
    theme: props.theme,
    autoMini: true,
    screenshot: props.screenshot,
    hotkey: true,
    pip: true,
    mutex: true,
    fullscreen: true,
    fullscreenWeb: true,
    airplay: true,
    setting: true,
    flip: true,
    playbackRate: true,
    aspectRatio: true,
    volume: props.volume,
    isLive: props.isLive,
    autoplay: props.autoplay,
    miniProgressBar: props.miniProgressBar,
  })
}
onMounted(() => {
  initPlayer()
})
</script>

<template>
  <div ref="artplayer" />
</template>

<style scoped lang="scss"></style>
