<script lang="ts" setup>
import Logo from './Logo/index.vue'
import Menu from './Menu/index.vue'

const { changeCollapsed } = appStore()
const collapsed = ref<boolean>(appStore().collapsed)

watch(
  () => appStore().collapsed,
  (val) => {
    collapsed.value = val
  },
)
</script>

<template>
  <aside
    class="relative m-2 mr-0 duration-300 bg-white dark:bg-dark rounded-md flex flex-col"
    :class="[collapsed ? 'w-[48px]' : 'w-[200px]']">
    <Logo class="px-2" :collapsed="collapsed" />

    <div class="flex-1 overflow-auto">
      <n-scrollbar>
        <Menu :collapsed="collapsed" />
      </n-scrollbar>
    </div>
    <div class="flex w-full p-2 border-t border-t-gray/20" :class="[collapsed ? 'justify-center' : 'justify-end']">
      <button icon-btn :class="[collapsed ? 'rotate-180' : '']" @click="changeCollapsed">
        <i i-carbon-chevron-right></i>
      </button>
    </div>
  </aside>
</template>

<style scoped lang="scss"></style>
