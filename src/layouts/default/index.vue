<script lang="ts" setup>
import { Component, h, ref } from 'vue'
import Footer from './components/Footer/index.vue'
import Header from './components/Header/index.vue'
import Logo from './components/Logo/index.vue'
import Main from './components/Main/index.vue'
import Menu from './components/Menu/index.vue'
import Tags from './components/Tags/index.vue'

import { useMenu } from '@/store/useMenu'
import type { MenuOption } from 'naive-ui'
import { NIcon } from 'naive-ui'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()
const selectedKey = ref(route.name as string)
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
const menu = useMenu()
console.log(menu.getMenus)
const menuOptions: MenuOption[] = menu.getMenus
const defaultExpandedKeys = ref(['fish', 'braise'])
</script>

<template>
  <main class="flex bg-[#f7f7f7]">
    <aside class="w-[200px] m-2 mr-0 rounded-md bg-white">
      <Logo class="px-2" />
      <Menu :selected-key="selectedKey" :default-expanded-keys="defaultExpandedKeys" :menu-options="menuOptions" />
    </aside>

    <main class="flex flex-col flex-1 h-screen">
      <Header class="mb-0 bg-white" />
      <Tags class="px-2 my-2" />
      <div class="flex-1 mx-2 overflow-hidden bg-white rounded-md">
        <n-scrollbar>
          <Main class="p-2" />
        </n-scrollbar>
      </div>
      <Footer class="p-2 m-2 bg-white" />
    </main>
  </main>
</template>

<style scoped lang="scss"></style>
