<script lang="ts" setup>
import config from '@/config/config'
import Footer from './components/Footer/index.vue'
import Header from './components/Header/index.vue'
import Main from './components/Main/index.vue'
import Tags from './components/Tags/index.vue'
import Aside from './components/Aside/index.vue'
</script>

<template>
  <main class="flex bg-[#f7f7f7] dark:bg-[#18181C]">
    <Aside />

    <main class="flex flex-col flex-1 h-screen">
      <Header class="mb-0 bg-white dark:bg-[#18181C]" />
      <Tags class="px-2 my-2" />
      <div class="flex-1 mx-2 overflow-hidden dark:bg-[#18181C] rounded-md">
        <n-scrollbar><Main class="" /></n-scrollbar>
      </div>
      <Footer v-if="config.layout.showFooter" class="p-2 m-2 bg-white dark:bg-[#18181C]" />
    </main>
  </main>
</template>

<style scoped lang="scss"></style>
