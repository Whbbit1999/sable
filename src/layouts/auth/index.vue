<script lang="ts" setup>
import { useDark } from '@vueuse/core'
import { FullScreen, ToggleTheme } from '@sable/components'
// import loginBgUrl from '@/assets/images/login-bg.jpg'

useDark()
</script>

<template>
  <main>
    <NGrid class="shading" cols="12" item-responsive responsive="screen" x-gap="10" h-screen bg="gray-100 dark:darkBodyBgColor">
      <NGridItem span="0 m:7 l:7">
        <div class="shading" h-screen w-full flex flex-1 flex-col items-center justify-center bg-dark>
          <img src="/sable_cover.png" alt="" class="w-full object-cover">
        </div>
      </NGridItem>

      <NGridItem span="xs:12 s:12 m:5 l:5">
        <div
          flex="~ items-center justify-center 1"
          text="dark dark:white"
          relative h-full w-full
        >
          <div class="w-3/5">
            <router-view v-slot="{ Component }">
              <Transition appear mode="out-in" name="nested">
                <component :is="Component" />
              </Transition>
            </router-view>
          </div>
          <div class="absolute right-10px top-10px flex items-center gap-2">
            <FullScreen />
            <ToggleTheme />
          </div>
        </div>
      </NGridItem>
    </NGrid>
  </main>
</template>

<style scoped lang="scss">
.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}
.nested-enter-active .inner {
  transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  opacity: 0.001;
}
</style>
