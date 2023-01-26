<script lang="ts" setup>
import MarkdownEditor from '@/components/markdown/editor.vue'
import { ref } from 'vue'
const content = ref('# title')
</script>

<template>
  <div>
    <MarkdownEditor v-model="content" />
    {{ content }}
  </div>
</template>
<style scoped lang="scss"></style>
