<script lang="ts" setup>
import { ChevronBackOutline } from '@vicons/ionicons5'
import Logo from './Logo/index.vue'
import Menu from './Menu/index.vue'

const collapsed = ref<boolean>(appStore().collapsed)
const { changeCollapsed } = appStore()

watch(
  () => appStore().collapsed,
  (val) => {
    collapsed.value = val
  },
)
</script>

<template>
  <aside
    class="relative m-2 mr-0 duration-300 bg-white rounded-md flex flex-col"
    :class="[collapsed ? 'w-[48px]' : 'w-[200px]']">
    <Logo class="px-2" :collapsed="collapsed" />

    <div class="flex-1 overflow-auto">
      <n-scrollbar>
        <Menu :collapsed="collapsed" />
      </n-scrollbar>
    </div>
    <div class="flex w-full p-2 border-t" :class="[collapsed ? 'justify-center' : 'justify-end']">
      <div
        class="flex items-center justify-center p-1 duration-300 border rounded-md cursor-pointer"
        :class="[collapsed ? 'rotate-180' : '']"
        @click="changeCollapsed">
        <n-icon :size="16"> <ChevronBackOutline /> </n-icon>
      </div>
    </div>
  </aside>
</template>

<style scoped lang="scss"></style>
