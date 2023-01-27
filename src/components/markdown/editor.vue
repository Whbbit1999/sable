<script lang="ts" setup>
import { uploadImage } from '@/api/uploadApi'
import MKEditor from '@toast-ui/editor'
import '@toast-ui/editor/dist/toastui-editor.css'
import { onMounted } from 'vue'

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
  initMdEditor()
})

let mdEditor
function initMdEditor() {
  const el = document.querySelector('#markdownEditor') as HTMLDivElement
  mdEditor = new MKEditor({
    el,
    height: `${props.height}px`,
    initialValue: props.modelValue,
    initialEditType: 'markdown',
    previewStyle: 'vertical',
    placeholder: props.placeholder,
    hideModeSwitch: true,
    events: {
      change(type: string) {
        if (type === 'markdown') {
          const content = mdEditor.getMarkdown()
          emits('update:modelValue', content)
        } else if (type === 'wysiwyg') {
          const content = mdEditor.getHTML()
          emits('update:modelValue', content)
        }
      },
    },
    hooks: {
      async addImageBlobHook(blob, callback) {
        console.log(blob)
        const form = new FormData()
        form.append('file', blob, blob.name)

        const { data } = await uploadImage(form)

        callback(data.url, blob.name)
      },
    },
  })

  // 数据回显
  if (props.modelValue) {
    mdEditor.setHTML(props.modelValue)
  }
}
</script>

<template>
  <div id="markdownEditor"></div>
</template>

<style lang="scss"></style>
