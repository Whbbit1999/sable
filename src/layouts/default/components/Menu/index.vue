<script lang="ts" setup>
import { menuStore } from '@/store/menuStore'

import type { MenuOption } from 'naive-ui'
import { ref, unref, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const selectedKey = ref(route.name as string)

const menu = menuStore()
const menuOptions: MenuOption[] = menu.getMenus
const defaultExpandedKeys = ref()
const props = withDefaults(
  defineProps<{
    collapsed: boolean
  }>(),
  {
    collapsed: false,
  },
)
const collapsed = ref<boolean>(props.collapsed)

watch(
  () => props.collapsed,
  (val: boolean) => {
    collapsed.value = val
  },
)
function handleMenuSelect(key: string, item: MenuOption) {
  selectedKey.value = key

  // 增加历史菜单
  menuStore().addHistoryMenu(unref(route))
}
</script>

<template>
  <n-menu
    :collapsed="collapsed"
    :options="menuOptions"
    :default-expanded-keys="defaultExpandedKeys"
    accordion
    :indent="18"
    :value="selectedKey"
    :on-update:value="handleMenuSelect" />
</template>

<style scoped lang="scss"></style>
