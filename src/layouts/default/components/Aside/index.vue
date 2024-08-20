<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import Logo from './Logo/index.vue'
import Menu from './Menu/index.vue'
import config from '@/config/config'

const appStore = useAppStore()
const { toggleCollapsed } = appStore
const { collapsed } = storeToRefs(appStore)
</script>

<template>
  <NLayoutSider
    m-2 mr-0 rounded-md
    collapse-mode="width"
    :collapsed-width="48"
    :width="200"
    :collapsed="collapsed"
    :show-trigger="config.layout.aside.trigger"
    :native-scrollbar="config.layout.aside['native-scrollbar']"
    @collapse="toggleCollapsed"
    @expand="toggleCollapsed"
  >
    <Logo px-2 :collapsed="collapsed" />

    <div flex-1 overflow-hidden>
      <NScrollbar>
        <Menu :collapsed="collapsed" />
      </NScrollbar>
    </div>
  </NLayoutSider>
</template>

<style scoped lang="scss"></style>
