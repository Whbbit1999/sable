<script lang="ts" setup>
import { useDark } from '@vueuse/core'
import loginBgUrl from '@/assets/images/login-bg.jpg'

useDark()
</script>

<template>
  <main>
    <n-grid cols="12" item-responsive responsive="screen" x-gap="10" h-screen bg="gray-100 dark:darkContainerBgColor">
      <n-grid-item span="0 m:4 l:8">
        <div flex flex-col items-center justify-center flex-1 w-full h-screen>
          <img :src="loginBgUrl" class="object-cover h-full" :draggable="false">
          <div absolute bottom-0 p-2 bg-white dark:bg-dark dark:text-white rounded-sm opacity-70>
            Photo by
            <n-button
              text
              type="primary"
              tag="a"
              href="https://unsplash.com/@oskark?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
            >
              Oskar Kadaksoo
            </n-button>
            on
            <n-button
              text
              type="primary"
              tag="a"
              href="https://unsplash.com/photos/LavQxjkLIq0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
            >
              Unsplash
            </n-button>
          </div>
        </div>
      </n-grid-item>

      <n-grid-item span="xs:12 s:12 m:8 l:4">
        <div
          flex="~ items-center justify-center 1"
          bg="white dark:dark"
          w-full
          h-full
          text="dark dark:white"
          rounded-lg
        >
          <page class="w-4/5">
            <router-view />
          </page>
        </div>
      </n-grid-item>
    </n-grid>
  </main>
</template>

<style scoped lang="scss"></style>
