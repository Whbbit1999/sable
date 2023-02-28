<script lang="ts" setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <n-breadcrumb>
    <template v-if="route">
      <n-breadcrumb-item v-for="(r, i) in route.matched" :key="i" :href="`#${r.path}`" :clickable="false">
        {{ r.meta.menu.title }}</n-breadcrumb-item
      >
    </template>
  </n-breadcrumb>
</template>

<style scoped lang="scss"></style>
