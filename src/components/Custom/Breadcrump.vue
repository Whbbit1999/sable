<script lang="ts" setup>
import config from '@/config/config'
import Icon from '../Icon'

const route = useRoute()
</script>

<template>
  <n-breadcrumb>
    <template v-if="route">
      <!-- :href="i === route.matched.length - 1 ? `#${r.path}` : ''" -->
      <n-breadcrumb-item v-for="(r, i) in route.matched" :key="i" :clickable="false">
        <div class="flex items-center gap-1">
          <Icon :icon="r.meta?.menu?.icon ?? config.menu.defaultRouteIcon" size="14" />
          {{ r.meta.menu.title }}
        </div>
      </n-breadcrumb-item>
    </template>
  </n-breadcrumb>
</template>

<style scoped lang="scss"></style>
