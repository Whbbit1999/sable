<script lang="ts" setup>
import Aside from './components/Aside/index.vue'
import Footer from './components/Footer/index.vue'
import Header from './components/Header/index.vue'
import Main from './components/Main/index.vue'
import Tags from './components/Tags/index.vue'
import config from '@/config/config'
</script>

<template>
  <main
    flex
    h-screen
    bg="containerBgColor dark:darkContainerBgColor"
    text="containerTextColor dark:darkContainerTextColor"
  >
    <Aside />

    <main flex="~ col 1 " h-full overflow-hidden>
      <Header mb-0 bg="white dark:dark" />
      <Tags px-2 my-2 />
      <div flex-1 mx-2 overflow-hidden rounded-md>
        <n-scrollbar><Main class="" /></n-scrollbar>
      </div>
      <Footer v-if="config.layout.showFooter" p-2 m-2 bg="white dark:dark" text="dark:white/80" />
    </main>
  </main>
</template>

<style scoped lang="scss"></style>
