<script lang="ts" setup>
import { Component, h, ref } from 'vue'
import Footer from './components/Footer/index.vue'
import Header from './components/Header/index.vue'
import Logo from './components/Logo/index.vue'
import Main from './components/Main/index.vue'
import Menu from './components/Menu/index.vue'
import Tags from './components/Tags/index.vue'

import { renderLink } from '@/utils'
import type { MenuOption } from 'naive-ui'
import { NIcon } from 'naive-ui'
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
      { label: renderLink('home', '首页'), key: 'console' },
      { label: '工作台', key: 'workplace' },
      {
        label: () =>
          h(
            'a',
            {
              href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F',
              target: '_blank',
              rel: 'noopenner noreferrer',
            },
            '且听风吟',
          ),
        key: 'workplace',
      },
    ],
  },
  {
    label: renderLink('about', '关于我'),
    key: 'about',
  },
]
const defaultExpandedKeys = ref(['fish', 'braise'])
</script>

<template>
  <main class="flex bg-[#f7f7f7]">
    <aside class="w-[200px] m-2 mr-0 p-2 rounded-md bg-white">
      <Logo />
      <Menu :selected-key="selectedKey" :default-expanded-keys="defaultExpandedKeys" :menu-options="menuOptions" />
    </aside>

    <main class="flex flex-col flex-1 h-screen">
      <Header class="mb-0 bg-white" />
      <Tags class="px-2 my-2" />
      <n-scrollbar>
        <Main class="flex-1 p-2 mx-2 bg-white rounded-md" />
      </n-scrollbar>
      <Footer class="p-2 m-2 bg-white" />
    </main>
  </main>
</template>

<style scoped lang="scss"></style>
