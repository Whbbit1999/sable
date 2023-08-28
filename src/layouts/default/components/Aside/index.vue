<script lang="ts" setup>
import Logo from './Logo/index.vue'
import Menu from './Menu/index.vue'

const { changeCollapsed } = useAppStore()
const collapsed = ref<boolean>(useAppStore().collapsed)

watch(
  () => useAppStore().collapsed,
  (val) => { collapsed.value = val },
)
</script>

<template>
  <aside
    relative m-2 mr-0 duration-300 rounded-md
    bg="white dark:dark"
    flex="~ col"
    :class="[collapsed ? 'w-[48px]' : 'w-[200px]']"
  >
    <Logo px-2 :collapsed="collapsed" />

    <div flex-1 overflow-auto>
      <n-scrollbar>
        <Menu :collapsed="collapsed" />
      </n-scrollbar>
    </div>

    <div flex w-full p-2 border="t t-gray/20" :class="[collapsed ? 'justify-center' : 'justify-end']">
      <button icon-btn :class="[collapsed ? 'rotate-180' : '']" @click="changeCollapsed">
        <i i-carbon-chevron-right />
      </button>
    </div>
  </aside>
</template>

<style scoped lang="scss"></style>
