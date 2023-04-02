<script lang="ts" setup>
import { appStore } from '@/store/appStore'
import { ChevronBackOutline } from '@vicons/ionicons5'
import { ref, watch } from 'vue'
import Footer from './components/Footer/index.vue'
import Header from './components/Header/index.vue'
import Logo from './components/Logo/index.vue'
import Main from './components/Main/index.vue'
import Menu from './components/Menu/index.vue'
import Tags from './components/Tags/index.vue'

const collapsed = ref<boolean>(appStore().collapsed)
watch(
  () => appStore().collapsed,
  (val) => {
    collapsed.value = val
  },
)
</script>

<template>
  <main class="flex bg-[#f7f7f7]">
    <aside
      class="relative m-2 mr-0 duration-300 bg-white rounded-md"
      :class="[appStore().collapsed ? 'w-[48px]' : 'w-[200px]']">
      <Logo class="px-2" :collapsed="collapsed" />
      <Menu :collapsed="collapsed" class="flex-1" />

      <div
        class="!absolute top-1/2 right-0 translate-x-1/2 translate-y-1/2 duration-300 rounded-full bg-white p-1 flex items-center justify-center border cursor-pointer"
        :class="[appStore().collapsed ? 'rotate-180' : '']"
        @click="appStore().changeCollapsed">
        <n-icon :size="16">
          <ChevronBackOutline />
        </n-icon>
      </div>
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
