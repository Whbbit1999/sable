<script lang="ts" setup>
import Editor from '@/components/markdown/editor.vue'

const content = ref('# title')
const previewContent = ref('# title \n ```js \n const a = 10 \n ```')
</script>

<template>
  <div>
    <Editor v-model="content" />
    {{ content }}
    <Editor v-model="previewContent" preview />
  </div>
</template>

<style scoped lang="scss"></style>
