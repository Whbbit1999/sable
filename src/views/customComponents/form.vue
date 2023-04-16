<script lang="ts" setup>
import FormFieldList from '@/components/Custom/FormFieldList.vue'
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

const submit = (...args) => {
  console.log(args)
}
const article = {
  title: '',
  desc: '',
  article: '',
}
</script>

<template>
  <main>
    <FormFieldList :model="site" :fields="SystemFormField.site" @submit="submit"> </FormFieldList>
    <FormFieldList :model="article" :fields="ArticleFormField" @submit="submit">
      <template #button>
        <n-space>
          <n-button type="primary" size="medium">发表文章</n-button>
          <n-button type="info" size="medium">保存草稿</n-button>
        </n-space>
      </template>
    </FormFieldList>
  </main>
</template>

<style scoped lang="scss"></style>
