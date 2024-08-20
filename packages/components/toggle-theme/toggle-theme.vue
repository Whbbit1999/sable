<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'
import { useSiteStore } from '@sable/store'
import { storeToRefs } from 'pinia'

const siteStore = useSiteStore()
const { setIsDark } = siteStore
const isDark = useDark()
watch(isDark, () => { setIsDark(isDark.value) })
const toggleDark = useToggle(isDark)

function toggle() {
  toggleDark()
}
</script>

<template>
  <div icon-btn @click="toggle">
    <i v-show="!isDark" i-carbon-moon />
    <i v-show="isDark" i-carbon-sun />
  </div>
</template>

<style scoped lang="scss"></style>
