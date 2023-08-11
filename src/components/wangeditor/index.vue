<script lang="ts" setup>
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { uploadImage } from '@/api/uploadApi'

import '@wangeditor/editor/dist/css/style.css' // 引入 css

const props = withDefaults(
  defineProps<{
    modelValue?: string
    placeholder?: string
  }>(),
  {
    modelValue: '',
    placeholder: '请输入内容...',
  },
)
const emits = defineEmits(['update:modelValue'])
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()
const content = ref(props.modelValue)
const toolbarConfig = {}
const editorConfig = {
  placeholder: props.placeholder,
  MENU_CONF: {
    uploadImage: {
      async customUpload(file: File, insertFn: any) {
        const form = new FormData()
        form.append('file', file, file.name)
        const res = await uploadImage(form)
        insertFn(res.data.url, '', res.data.url)
      },
    },
  },
}

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null)
    return
  editor.destroy()
})

function handleCreated(editor) {
  editorRef.value = editor // 记录 editor 实例，重要！
}

function handleChange(editor) {
  const content = editor.getHtml()
  emits('update:modelValue', content)
}
const mode = ref('default')
</script>

<template>
  <div style="border: 1px solid #ccc">
    <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :default-config="toolbarConfig" :mode="mode" />
    <Editor
      v-model="content"
      style="height: 500px; overflow-y: hidden"
      :default-config="editorConfig"
      :mode="mode"
      @on-created="handleCreated"
      @on-change="handleChange"
    />
  </div>
</template>
