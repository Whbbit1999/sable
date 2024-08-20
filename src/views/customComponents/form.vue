<script lang="ts" setup>
import { FormField } from '@sable/components'
import { ArticleFormField, SystemFormField } from '@/config/form'

const site = {
  name: '233',
  site: '233',
  cover: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
  used: true,
  sex: 0,
  usedCount: 3000,
  content: '# aaa\n ceshi',
  body: '',
}

function submit() {
  // TODO submit function
}
const article = {
  title: 'hello',
  desc: '',
  article: '',
}
</script>

<template>
  <main>
    <FormField :model="site" :fields="SystemFormField.site" @submit="submit" />
    <FormField :model="article" :fields="ArticleFormField" @submit="submit">
      <template #button>
        <NSpace>
          <NButton type="primary" size="medium">
            发表文章
          </NButton>
          <NButton type="info" size="medium">
            保存草稿
          </NButton>
        </NSpace>
      </template>
    </FormField>
  </main>
</template>

<style scoped lang="scss"></style>
