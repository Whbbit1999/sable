<script lang="ts" setup>
import Editor from '@/components/wangeditor/index.vue'
import { ref } from 'vue'
const content = ref()
</script>

<template>
  <div>
    <Editor v-model="content" />
    {{ content }}
  </div>
</template>

<style scoped lang="scss"></style>
