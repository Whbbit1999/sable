<script lang="ts" setup>
import Quill from '@/components/Editor/Quill.vue'

const content = ref()
</script>

<template>
  <div>
    <div class="grid grid-cols-2">
      <n-card>
        <template #header>
          编辑器
        </template>
        <div class="min-h-400px">
          <Quill v-model="content" />
        </div>
      </n-card>
      <n-card>
        <template #header>
          预览
        </template>
        <div v-html="content" />
      </n-card>
    </div>

    <n-card class="mt-4">
      <template #header>
        html字符串
      </template>
      {{ content }}
    </n-card>
  </div>
</template>

<style scoped lang="scss"></style>
