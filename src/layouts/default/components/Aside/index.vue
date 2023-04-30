<script lang="ts" setup>
import { appStore } from '@/store/appStore'
import { ChevronBackOutline } from '@vicons/ionicons5'
import { ref, watch } from 'vue'
import Menu from './Menu/index.vue'
import Logo from './Logo/index.vue'

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
    class="relative m-2 mr-0 duration-300 bg-white dark:bg-[#18181C] rounded-md flex flex-col"
    :class="[appStore().collapsed ? 'w-[48px]' : 'w-[200px]']">
    <Logo class="px-2" :collapsed="collapsed" />
    <Menu :collapsed="collapsed" class="flex-1" />

    <div class="flex w-full p-2 border-t" :class="[appStore().collapsed ? 'justify-center' : 'justify-end']">
      <div
        class="flex items-center justify-center p-1 duration-300 border rounded-md cursor-pointer"
        :class="[appStore().collapsed ? 'rotate-180' : '']"
        @click="appStore().changeCollapsed">
        <n-icon :size="16">
          <ChevronBackOutline />
        </n-icon>
      </div>
    </div>
  </aside>
</template>

<style scoped lang="scss"></style>
