<script lang="ts" setup>
import logoSrc from '@/assets/images/logo.svg'
import config from '@/config/config'

const props = defineProps<{
  collapsed: boolean
}>()

const collapsed = computed(() => props.collapsed)
</script>

<template>
  <section
    flex="~ items-center justify-start"
    border="b gray/20"
    text="dark dark:white" p-2
    :class="[collapsed ? 'justify-center ' : '']"
  >
    <img :src="logoSrc" alt="logo" class="h-8 w-8" draggable="false">
    <div v-show="!collapsed" flex="~ items-center justify-center" px-2 text-xl font-light>
      {{ config.site?.title }}
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
