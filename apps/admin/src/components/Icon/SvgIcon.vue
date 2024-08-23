<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    icon?: Component
    prefix?: string
    color?: string
    spin?: boolean
    size?: number | string
    name: string
  }>(),
  {
    size: 16,
    spin: false,
  },
)

const symbolId = computed(() => `#${props.prefix}-${props.icon}`)
</script>

<template>
  <svg aria-hidden="true" width="1rem" height="1rem">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<style scoped lang="scss"></style>
