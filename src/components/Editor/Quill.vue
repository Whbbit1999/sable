<script lang="ts" setup>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'

import Quill from 'quill'

const model = defineModel<string>()
const editor = ref<HTMLDivElement>()
function setupQuill() {
  const quill = new Quill(editor.value, {
    theme: 'snow',
    modules: {
      toolbar: [
        { header: [1, 2, 3, 4, 5, 6, false] }, // 标题
        'bold', // 加粗
        'italic', // 斜体
        'strike', // 删除线
        { size: ['small', false, 'large', 'huge'] }, // 字体大小
        { color: [] }, // 字体颜色、
        { background: [] }, // 字体背景颜色
        'link', // 插入链接
        'image', // 插入图片
        'blockquote', // 引用
        'link', // 超链接
        'video', // 插入视频
        { list: 'bullet' }, // 无序列表
        { list: 'ordered' }, // 有序列表
        { script: 'sub' }, // 下标
        { script: 'super' }, // 上标
        { align: [] }, // 对齐方式
        'formula', // 公式
        'clean', // remove formatting button
      ],
    },
  })

  quill.on('text-change', () => {
    model.value = quill.getSemanticHTML()
  })
}

onMounted(() => {
  setupQuill()
})
</script>

<template>
  <div ref="editor" />
</template>

<style>

</style>
