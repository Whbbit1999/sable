<script lang="ts" setup>
import Icon from '../Icon'
import config from '@/config/config'

const route = useRoute()
</script>

<template>
  <NBreadcrumb>
    <template v-if="route">
      <NBreadcrumbItem v-for="(r, i) in route.matched" :key="i" :clickable="false">
        <div flex items-center gap-1>
          <Icon :icon="r.meta?.menu?.icon ?? config.menu.defaultRouteIcon" size="14" />
          <div :class="r.meta?.menu?.icon" />
          {{ r.meta.menu.title }}
        </div>
      </NBreadcrumbItem>
    </template>
  </NBreadcrumb>
</template>

<style scoped lang="scss"></style>
