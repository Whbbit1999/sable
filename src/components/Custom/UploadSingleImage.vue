<script lang="ts" setup>
import Icon from '../Icon'
import useUpload from '@/composables/useUpload'

const props = withDefaults(
  defineProps<{
    modelValue: string
    url?: string
  }>(),
  { url: 'upload/image' },
)

const emit = defineEmits<{
  (e: 'update:modelValue', url: string): void
  (e: 'finish'): void
}>()

const { uploadImage } = useUpload()

const imageUrl = ref(props.modelValue)

async function request(options: any) {
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
    <Icon icon="ion:add" :size="32">
      点击上传
    </Icon>
  </n-upload>
</template>

<style scoped lang="scss"></style>
