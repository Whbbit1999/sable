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
    bg="bodyBgColor dark:darkBodyBgColor"
    text="containerTextColor dark:darkContainerTextColor"
  >
    <NLayout
      has-sider
      bg="bodyBgColor! dark:darkBodyBgColor!"
    >
      <Aside />

      <NScrollbar>
        <main flex="~ col 1 " h-full min-h-screen>
          <div bg="bodyBgColor/60 dark:darkBodyBgColor/60" backdrop-blur-sm sticky top-0 z-30>
            <Header mb-2 />
          </div>
          <!-- <Tags /> -->
          <div mx-5 flex-1>
            <Main />
          </div>
          <Footer v-if="config.layout.showFooter" p-2 m-2 text="dark:white/50 gray-400" />
        </main>
      </NScrollbar>
    </NLayout>
  </main>
</template>

<style scoped lang="scss"></style>
