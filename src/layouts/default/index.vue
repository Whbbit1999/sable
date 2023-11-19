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
    <NLayout has-sider>
      <Aside />

      <main flex="~ col 1 " h-full overflow-hidden>
        <Header mb-0 bg="white dark:dark" />
        <Tags />
        <div flex-1 mx-2 overflow-hidden>
          <NScrollbar><Main /></NScrollbar>
        </div>
        <Footer v-if="config.layout.showFooter" p-2 m-2 bg="white dark:dark" text="dark:white/80" />
      </main>
    </NLayout>
  </main>
</template>

<style scoped lang="scss"></style>
