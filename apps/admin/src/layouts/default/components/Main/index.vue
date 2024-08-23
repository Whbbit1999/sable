<script lang="ts" setup></script>

<template>
  <main>
    <NBackTop :right="0" />

    <RouterView v-slot="{ Component }">
      <Transition appear mode="out-in" name="nested">
        <keep-alive v-if="$route.meta?.menu?.keepAlive">
          <component :is="Component" />
        </keep-alive>
        <template v-else>
          <component :is="Component" />
        </template>
      </Transition>
    </RouterView>
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
