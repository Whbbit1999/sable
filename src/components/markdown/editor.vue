<script lang="ts" setup>
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css' // docs https://imzbf.github.io/md-editor-v3/docs#%F0%9F%A7%B1%20toolbarsExclude

import { uploadImage } from '@/api/uploadApi'
const props = withDefaults(
  defineProps<{
    modelValue: string
    theme?: 'light' | 'dark'
    previewTheme?: 'default' | 'github' | 'vuepress' | 'mk-cute' | 'smart-blue' | 'cyanosis'
    codeTheme?: 'atom' | 'a11y' | 'github' | 'gradient' | 'kimbie' | 'paraiso' | 'qtcreator' | 'stackoverflow'
    previewOnly?: boolean
    placeholder?: string
  }>(),
  {
    theme: 'light',
    codeTheme: 'atom',
    previewTheme: 'github',
    previewOnly: false,
    placeholder: '请输入markdown格式内容',
  },
)

const emits = defineEmits(['update:modelValue'])

const handleChangeContent = (v: string) => {
  emits('update:modelValue', v)
}
const handleUpdateImage = async (files: Array<File>, callback: (urls: string[]) => void) => {
  const res = (await Promise.all(
    files.map((file) => {
      return new Promise(async (resolve, reject) => {
        const form = new FormData()
        form.append('file', file)
        try {
          const { data } = await uploadImage(form)
          resolve(data.url)
        } catch (error) {
          reject(error)
        }
      })
    }),
  )) as string[]

  callback(res)
}
</script>

<template>
  <MdEditor
    v-model="props.modelValue"
    :placeholder="props.placeholder"
    :on-change="handleChangeContent"
    :on-upload-img="handleUpdateImage"
    :theme="props.theme"
    :code-theme="props.codeTheme"
    :preview-theme="props.previewTheme"
    :preview-only="props.previewOnly"
    :toolbarsExclude="['github']" />
</template>

<style scoped lang="scss"></style>
