<script lang="ts" setup>
import type { MenuOption } from 'naive-ui'
import { isExternal } from '@/utils'

type IMenuOption = MenuOption & {
  path: string | null
}

const props = withDefaults(
  defineProps<{ collapsed: boolean }>(),
  { collapsed: false },
)

const route = useRoute()
const router = useRouter()
const selectedKey = ref(route.name as string)

const menuStore = useMenuStore()
menuStore.composeMenus()
const options = computed(() => menuStore.menu)

const defaultExpandedKeys = ref()
const { collapsed } = toRefs(props)

// -------------------- 点击menu，选中项的处理 START --------------------
const historyMenuStore = useHistoryMenuStore()
function handleMenuSelect(key: string, item: IMenuOption) {
  if (isExternal(item?.path))
    return window.open(item.path)

  if (!key)
    return

  selectedKey.value = key
  router.push({ name: key })
  // 增加历史菜单
  historyMenuStore.addHistoryMenu(unref(route))
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
  <NMenu
    :collapsed="collapsed"
    :options="options"
    :default-expanded-keys="defaultExpandedKeys"
    accordion
    :indent="24"
    :value="selectedKey"
    :on-update:value="handleMenuSelect"
  />
</template>

<style scoped lang="scss"></style>
