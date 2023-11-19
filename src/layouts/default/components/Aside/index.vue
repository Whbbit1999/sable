<script lang="ts" setup>
import Logo from './Logo/index.vue'
import Menu from './Menu/index.vue'
import config from '@/config/config'

const { changeCollapsed } = useAppStore()

const collapsed = computed(() => useAppStore().getCollapsed)
</script>

<template>
  <aside
    relative m-2 mr-0 duration-300 rounded-md
    bg="white dark:dark"
    flex="~ col"
    :class="[collapsed ? 'w-[48px]' : 'w-[200px]']"
  >
    <NLayoutSider
      class="h-full"
      collapse-mode="width"
      :collapsed-width="48"
      :width="200"
      :collapsed="collapsed"
      :show-trigger="config.layout.aside.trigger"
      :native-scrollbar="config.layout.aside['native-scrollbar']"
      @collapse="changeCollapsed"
      @expand="changeCollapsed"
    >
      <Logo px-2 :collapsed="collapsed" />

      <div flex-1 overflow-hidden>
        <NScrollbar>
          <Menu :collapsed="collapsed" />
        </NScrollbar>
      </div>
    </NLayoutSider>
  </aside>
</template>

<style scoped lang="scss"></style>
