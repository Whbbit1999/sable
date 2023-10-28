<script lang="ts" setup>
import Editor from '@/components/markdown/editor.vue'

const content = ref('# 标题 \n\n> 引用文本\n\n```ts\n const a: number = 10 \n const b: string = "hello world"\n ```')
</script>

<template>
  <div bg-white p-2 rounded-md>
    <NTabs type="line" animated>
      <NTabPane name="edit" tab="编辑">
        <Editor v-model="content" />
        <div bg-white my-2 p-2 rounded-md>
          <h2 text-lg>
            解析后的内容
          </h2>
          {{ JSON.stringify(content, null, 2) }}
        </div>
      </NTabPane>

      <NTabPane name="preview" tab="预览">
        <Editor v-model="content" preview preview-theme="vuepress" />
      </NTabPane>
    </NTabs>
  </div>
</template>

<style scoped lang="scss"></style>
