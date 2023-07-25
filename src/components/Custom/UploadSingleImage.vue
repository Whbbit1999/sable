<script lang="ts" setup>
import useUpload from '@/composables/useUpload'
import Icon from '../Icon'

const { uploadImage } = useUpload()

const props = withDefaults(
  defineProps<{
    modelValue: string
    url?: string
  }>(),
  { url: 'upload/image' },
)
const imageUrl = ref(props.modelValue)

const emit = defineEmits<{
  (e: 'update:modelValue', url: string): void
  (e: 'finish'): void
}>()

const request = async (options: any) => {
  const form = new FormData()
  form.append('file', options.file)

  const { data } = await uploadImage(form, props.url)
  const { url } = data
  imageUrl.value = url

  emit('update:modelValue', imageUrl.value)
  emit('finish')
}
</script>

<template>
  <n-upload list-type="image-card" :max="1" :on-change="request">
    <Icon icon="ion:add" :size="32">点击上传</Icon>
  </n-upload>
</template>

<style scoped lang="scss"></style>
