<script lang="ts" setup>
import Editor from '@/components/markdown/editor.vue'
const content = ref('# title')
</script>

<template>
  <div>
    <Editor v-model="content" />
    {{ content }}
  </div>
</template>
<style scoped lang="scss"></style>
