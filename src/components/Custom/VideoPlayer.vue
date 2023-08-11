<script lang="ts" setup>
import Artplayer from 'artplayer'

const props = defineProps<{
  url: string
  poster: string
}>()

const artplayer = ref()

function initPlayer() {
  new Artplayer({
    container: artplayer.value,
    url: props.url,
    poster: props.poster,
    theme: '#ffad00',
    autoMini: true,
    screenshot: true,
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
