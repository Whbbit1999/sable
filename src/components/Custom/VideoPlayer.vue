<script lang="ts" setup>
import { VideoPlayer, VideoPlayerProps } from '@videojs-player/vue'
import 'video.js/dist/video-js.css'
import { shallowReactive } from 'vue'

const { url, cover } = defineProps<{
  url: string
  cover: string
}>()

const config = shallowReactive<VideoPlayerProps>({
  autoplay: false,
  volume: 0.8,
  controls: true,
  loop: false,
  playbackRate: 1,
  muted: false,
  fluid: true,
  playbackRates: [0.5, 1, 1.5, 2],
})
</script>

<template>
  <main>
    <VideoPlayer
      class="video-player"
      :src="url"
      :poster="cover"
      :volume="config.volume"
      :autoplay="config.autoplay"
      :loop="config.loop"
      :playbackRates="config.playbackRates"
      :fluid="config.fluid"
      :techOrder="['html5']"
      v-model:playbackRate="config.playbackRate"
      v-model:controls="config.controls"
      v-model:muted="config.muted" />
  </main>
</template>

<style scoped lang="scss"></style>
