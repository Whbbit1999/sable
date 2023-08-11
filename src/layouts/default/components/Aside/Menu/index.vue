<script lang="ts" setup>
import type { MenuOption } from 'naive-ui'
import { isExternal } from '@/utils'

type IMenuOption = MenuOption & {
  path: string | null
}

const props = withDefaults(
  defineProps<{
    collapsed: boolean
  }>(),
  {
    collapsed: false,
  },
)
const route = useRoute()
const router = useRouter()
const selectedKey = ref(route.name as string)
const menu = menuStore()
const menuOptions: IMenuOption[] = menu.getMenus
const defaultExpandedKeys = ref()
const collapsed = ref<boolean>(props.collapsed)

watch(
  () => props.collapsed,
  (val: boolean) => {
    collapsed.value = val
  },
)

// -------------------- 点击menu，选中项的处理 START --------------------
const historyMenuStore = useHistoryMenuStore()
function handleMenuSelect(key: string, item: IMenuOption) {
  if (isExternal(item?.path)) {
    window.open(item.path)
  }
  else {
    selectedKey.value = key
    router.push({ name: key })
    // 增加历史菜单
    historyMenuStore.addHistoryMenu(unref(route))
  }
}
// -------------------- 点击menu，选中项的处理 END ----------------------

// -------------------- 路由发生变化，选中项的处理 START --------------------
router.beforeEach((to) => {
  if (isExternal(to.path))
    return

  selectedKey.value = to.name as string
})
// -------------------- 路由发生变化，选中项的处理 END ----------------------
</script>

<template>
  <n-menu
    :collapsed="collapsed"
    :options="menuOptions"
    :default-expanded-keys="defaultExpandedKeys"
    accordion
    :indent="18"
    :value="selectedKey"
    :on-update:value="handleMenuSelect"
  />
</template>

<style scoped lang="scss">
:deep(.n-menu-item-content--collapsed) {
  .n-menu-item-content__icon {
    margin-right: 0 !important;
  }
}
</style>
