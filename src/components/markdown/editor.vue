<script lang="ts" setup>
import { onMounted } from 'vue'
import ToastUIEditor from './toastEditor'

const props = withDefaults(
  defineProps<{
    modelValue?: string
    height?: number
    placeholder?: string
  }>(),
  {
    modelValue: '',
    height: 300,
    placeholder: '请输入markdown',
  },
)
const emits = defineEmits(['update:modelValue'])

onMounted(() => {
  const toastUI = new ToastUIEditor('#markdownEditor', props.modelValue, `${props.height}px`)
  toastUI.editor.on('change', (type: string) => {
    if (type === 'markdown') {
      const content = toastUI.editor.getMarkdown()
      emits('update:modelValue', content)
    } else if (type === 'wysiwyg') {
      const content = toastUI.editor.getHTML()
      emits('update:modelValue', content)
    }
  })
})
</script>

<template>
  <div id="markdownEditor"></div>
</template>

<style lang="scss">
@import 'https://uicdn.toast.com/editor/latest/toastui-editor.min.css';
</style>
