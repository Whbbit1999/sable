<script lang="ts" setup>
import { useDark } from '@vueuse/core'

// import loginBgUrl from '@/assets/images/login-bg.jpg'

useDark()
</script>

<template>
  <main>
    <NGrid cols="12" item-responsive responsive="screen" x-gap="10" h-screen bg="gray-100 dark:darkBodyBgColor">
      <NGridItem span="0 m:8 l:8">
        <div h-screen w-full flex flex-1 flex-col items-center justify-center bg-dark>
          <img src="/sable_cover.png" alt="" class="w-full object-cover">
        </div>
      </NGridItem>

      <NGridItem span="xs:12 s:12 m:4 l:4">
        <div
          flex="~ items-center justify-center 1"
          bg="white dark:dark"
          text="dark dark:white"

          h-full w-full rounded-md
        >
          <Page class="w-4/5">
            <RouterView />
          </Page>
        </div>
      </NGridItem>
    </NGrid>
  </main>
</template>

<style scoped lang="scss"></style>
