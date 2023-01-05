<script lang="ts" setup>
import { ref, h, Component } from 'vue'
import Footer from './components/Footer/index.vue'
import Menu from './components/Menu/index.vue'
import Logo from './components/Logo/index.vue'
import Header from './components/Header/index.vue'
import Main from './components/Main/index.vue'
import Tags from './components/Tags/index.vue'

import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const selectedKey = ref(route.name as string)
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    label: '控制台',
    key: 'disboard',
    children: [
      { label: '主控台', key: 'console' },
      { label: '工作台', key: 'workplace' },
    ],
  },
  {
    label: '关于我',
    key: 'about',
  },
]
const defaultExpandedKeys = ref(['fish', 'braise'])
</script>

<template>
  <main class="flex">
    <aside class="w-[200px] h-screen border-r border-gray-200">
      <Logo />
      <Menu :selected-key="selectedKey" :default-expanded-keys="defaultExpandedKeys" :menu-options="menuOptions" />
    </aside>

    <main class="flex-1 h-screen overflow-auto">
      <Header />
      <Tags />
      <Main />
      <Footer />
    </main>
  </main>
</template>

<style scoped lang="scss"></style>
