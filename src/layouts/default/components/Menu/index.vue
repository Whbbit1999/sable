<script lang="ts" setup>
import type { MenuOption } from 'naive-ui'

const { selectedKey, menuOptions, defaultExpandedKeys } = defineProps<{
  selectedKey: string
  menuOptions: MenuOption[]
  defaultExpandedKeys: string[]
}>()
</script>

<template>
  <n-menu v-model:value="selectedKey" :options="menuOptions" :default-expanded-keys="defaultExpandedKeys" accordion />
</template>

<style scoped lang="scss"></style>
