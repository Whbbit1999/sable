<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useDark } from '@vueuse/core'
import { MdEditor, MdPreview } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import type { MarkdownEditorProps } from './markdown-editor'

const props = withDefaults(
  defineProps<MarkdownEditorProps>(),
  {
    codeTheme: 'atom',
    previewTheme: 'github',
    preview: false,
    placeholder: '请输入markdown格式内容',
  },
)
const emits = defineEmits(['update:modelValue'])
const { uploadImage } = props
// docs https://imzbf.github.io/md-editor-v3/docs#%F0%9F%A7%B1%20toolbarsExclude

const isDark = useDark()
const editorTheme = computed(() => isDark.value ? 'dark' : 'light')

const content = ref(props.modelValue)
function handleChangeContent(v: string) {
  content.value = v
  emits('update:modelValue', v)
}

async function handleUpdateImage(files: Array<File>, callback: (urls: string[]) => void) {
  const res = (await Promise.all(
    files.map((file) => {
      return new Promise((resolve, reject) => {
        const form = new FormData()
        form.append('file', file)
        try {
          uploadImage(form).then(({ data }) => resolve(data.url))
        }
        catch (error) {
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
    v-if="!preview"
    v-model="content"
    :placeholder="placeholder"
    :on-change="handleChangeContent"
    :on-upload-img="handleUpdateImage"
    :theme="editorTheme"
    :code-theme="codeTheme"
    :preview-theme="previewTheme"
    :toolbars-exclude="['github', 'save']"
  />

  <MdPreview
    v-else
    v-model="content"
    :preview-theme="previewTheme"
    :code-theme="codeTheme"
    :theme="editorTheme"
    :on-change="handleChangeContent"
  />
</template>

<style scoped lang="scss"></style>
