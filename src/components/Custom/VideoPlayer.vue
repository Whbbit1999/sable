<script lang="ts" setup>
import ArtPlayer from 'artplayer'

interface IProps {
  url: string
  poster: string
  theme?: string
  volume?: number
  isLive?: boolean
  autoplay?: boolean
  screenshot?: boolean
  miniProgressBar?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  theme: '#18a058',
  volume: 0.5,
  isLive: false,
  autoplay: false,
  screenshot: true,
  miniProgressBar: true,
})

const artPlayer = ref()

function initPlayer() {
  // eslint-disable-next-line no-new
  new ArtPlayer({
    container: artPlayer.value,
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
  <div ref="artPlayer" />
</template>

<style scoped lang="scss"></style>
