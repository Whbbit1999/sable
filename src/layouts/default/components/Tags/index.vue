<script lang="ts" setup>
import CustomTag from '@/components/Custom/Tag.vue'
</script>

<template>
  <!-- <n-scrollbar x-scrollable> -->
  <nav class="flex gap-2 overflow-auto">
    <CustomTag name="tag" v-for="i in 5" />
    <CustomTag name="tag" :active="true" />
  </nav>
  <!-- </n-scrollbar> -->
</template>

<style scoped lang="scss"></style>
