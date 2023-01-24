<script lang="ts" setup>
import { Close } from '@vicons/ionicons5'

const { name } = withDefaults(
  defineProps<{
    name: string
    showClose?: boolean
    active?: boolean
  }>(),
  { name: '', showClose: true, active: false },
)
</script>

<template>
  <div class="tag" :class="[active ? 'active' : '']">
    <span class="tag-name">{{ name }}</span> <n-icon v-if="showClose" size="14"><Close /></n-icon>
  </div>
</template>

<style scoped lang="scss">
.tag {
  @apply inline-flex justify-between items-center bg-white px-3 py-2 rounded-md hover:shadow-md duration-300 cursor-pointer text-sm;
  &.active {
    @apply text-rose-400;
  }
  .tag-name {
    @apply flex-1 mr-2;
  }
}
</style>
