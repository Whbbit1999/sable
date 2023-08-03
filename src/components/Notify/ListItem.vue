<script lang="ts" setup>
defineProps<{
  text: string
}>()
</script>

<template>
  <p class="truncate text-xs p-2 border-b border-b-gray/40 hover:bg-gray/10 duration-200 rounded-sm block">
    {{ text }}
  </p>
</template>

<style scoped lang="scss"></style>
