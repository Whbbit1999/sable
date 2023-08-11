<script lang="ts" setup>
import Icon from '../Icon'
import config from '@/config/config'

const route = useRoute()
</script>

<template>
  <n-breadcrumb>
    <template v-if="route">
      <n-breadcrumb-item v-for="(r, i) in route.matched" :key="i" :clickable="false">
        <div flex items-center gap-1>
          <Icon :icon="r.meta?.menu?.icon ?? config.menu.defaultRouteIcon" size="14" />
          {{ r.meta.menu.title }}
        </div>
      </n-breadcrumb-item>
    </template>
  </n-breadcrumb>
</template>

<style scoped lang="scss"></style>
