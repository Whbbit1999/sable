<script lang="ts" setup>
import { ref, watch } from 'vue'
import logoSrc from '@/assets/images/logo.svg'
const props = defineProps<{
  collapsed: boolean
}>()

const collapsed = ref<boolean>(props.collapsed)

watch(
  () => props.collapsed,
  (newVal) => {
    collapsed.value = newVal
  },
)
</script>

<template>
  <section
    class="flex items-center justify-start border-b border-gray-100"
    :class="[collapsed ? 'justify-center p-2' : '']">
    <img :src="logoSrc" alt="logo" class="w-8 h-8" draggable="false" />
    <div v-show="!collapsed" class="flex items-center justify-center p-2 text-2xl font-light">SableAdmin</div>
  </section>
</template>

<style scoped lang="scss"></style>
