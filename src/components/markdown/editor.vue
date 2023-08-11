<script lang="ts" setup>
import { useDark } from '@vueuse/core'
import { MdEditor, MdPreview } from 'md-editor-v3'
import { uploadImage } from '@/api/uploadApi'
import 'md-editor-v3/lib/style.css'

const props = withDefaults(
  defineProps<{
    modelValue: string
    previewTheme?: 'default' | 'github' | 'vuepress' | 'mk-cute' | 'smart-blue' | 'cyanosis'
    codeTheme?: 'atom' | 'a11y' | 'github' | 'gradient' | 'kimbie' | 'paraiso' | 'qtcreator' | 'stackoverflow'
    preview?: boolean
    placeholder?: string
  }>(),
  {
    codeTheme: 'atom',
    previewTheme: 'github',
    preview: false,
    placeholder: '请输入markdown格式内容',
  },
)
const emits = defineEmits(['update:modelValue'])
// docs https://imzbf.github.io/md-editor-v3/docs#%F0%9F%A7%B1%20toolbarsExclude

const isDark = useDark()
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
    :theme="isDark ? 'dark' : 'light'"
    :code-theme="codeTheme"
    :preview-theme="previewTheme"
    :toolbars-exclude="['github', 'save']"
  />

  <MdPreview v-else v-model="content" :preview-theme="previewTheme" :code-theme="codeTheme" />
</template>

<style scoped lang="scss"></style>
