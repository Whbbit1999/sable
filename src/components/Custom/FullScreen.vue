<script lang="ts" setup>
import { ContractOutline, ExpandOutline } from '@vicons/ionicons5'
import { ref } from 'vue'

const isFullScreen = ref(false)
function toggleFullScreen() {
  isFullScreen.value ? document.exitFullscreen() : document.documentElement.requestFullscreen()
  isFullScreen.value = !isFullScreen.value
}

document.addEventListener('fullscreenchange', (e) => {
  isFullScreen.value = Boolean(document.fullscreenElement)
})
</script>

<template>
  <n-icon @click="toggleFullScreen" size="20" class="duration-300 cursor-pointer hover:scale-110">
    <Transition mode="default">
      <ExpandOutline v-if="!isFullScreen" />
      <ContractOutline v-else />
    </Transition>
  </n-icon>
</template>

<style scoped lang="scss"></style>
