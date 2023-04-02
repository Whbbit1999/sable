<script lang="ts" setup>
import { menuStore } from '@/store/menuStore'
import { isExternal } from '@/utils'

import { ref, unref, watch } from 'vue'
import { useRoute } from 'vue-router'

import type { MenuOption } from 'naive-ui'
import { RouteLocationNormalized, onBeforeRouteLeave, useRouter } from 'vue-router'

type IMenuOption = MenuOption & {
  path: string | null
}
const route = useRoute()
const router = useRouter()
const selectedKey = ref(route.name as string)

const menu = menuStore()
const menuOptions: IMenuOption[] = menu.getMenus
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

const fromRoute = ref<RouteLocationNormalized>()
onBeforeRouteLeave((to, from) => {
  fromRoute.value = from
})

function handleMenuSelect(key: string, item: IMenuOption) {
  if (isExternal(item?.path)) {
    window.open(item.path)

    // 这里处理路由跳转至之前路由
    router.push({ name: fromRoute.value.name })
  } else {
    selectedKey.value = key
    // 增加历史菜单
    menuStore().addHistoryMenu(unref(route))
  }
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

<style scoped lang="scss">
:deep(.n-menu-item-content--collapsed) {
  .n-menu-item-content__icon {
    margin-right: 0 !important;
  }
}
</style>
