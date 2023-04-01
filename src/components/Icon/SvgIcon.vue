<script lang="ts" setup>
import { Component, computed } from 'vue'

const props = withDefaults(
  defineProps<{
    icon?: Component
    perfix?: string
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

const symbolId = computed(() => `#${props.perfix}-${props.icon}`)
</script>

<template>
  <svg aria-hidden="true" width="1rem" height="1rem">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<style scoped lang="scss"></style>
