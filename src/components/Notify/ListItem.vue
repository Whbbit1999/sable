<script lang="ts" setup>
import { CashOutline as CashIcon } from '@vicons/ionicons5'

defineProps<{
  text: string
}>()
</script>

<template>
  <!-- <p class="truncate text-xs p-2 border-b border-b-gray/40 hover:bg-gray/10 duration-200 rounded-sm block">
    {{ text }}
  </p> -->
  <n-thing content-indented>
    <template #avatar>
      <n-avatar round>
        <n-icon>
          <CashIcon />
        </n-icon>
      </n-avatar>
    </template>

    <template #header>
      {{ text }}
    </template>

    <template #description>
      白日依山尽，黄河入海流
    </template>

    <template #footer>
      <span class="text-xs text-gray">{{ new Date().toLocaleString() }}</span>
    </template>
  </n-thing>
  <n-divider />
</template>

<style scoped lang="scss"></style>
