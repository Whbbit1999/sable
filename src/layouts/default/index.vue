<script lang="ts" setup>
import config from '@/config/config'
import Aside from './components/Aside/index.vue'
import Footer from './components/Footer/index.vue'
import Header from './components/Header/index.vue'
import Main from './components/Main/index.vue'
import Tags from './components/Tags/index.vue'
</script>

<template>
  <main
    class="flex bg-bgColor dark:bg-darkContainerBgColor text-containerTextColor dark:text-darkContainerTextColor text-containerTextColor h-screen">
    <Aside />

    <main class="flex flex-col flex-1 h-full overflow-hidden">
      <Header class="mb-0 bg-white dark:bg-dark" />
      <Tags class="px-2 my-2" />
      <div class="flex-1 mx-2 overflow-hidden rounded-md">
        <n-scrollbar><Main class="" /></n-scrollbar>
      </div>
      <Footer v-if="config.layout.showFooter" class="p-2 m-2 bg-white dark:bg-dark dark:text-white/80" />
    </main>
  </main>
</template>

<style scoped lang="scss"></style>
