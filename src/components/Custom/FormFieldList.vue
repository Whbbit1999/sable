<script lang="ts" setup>
import { FormFieldType } from '@/config/form'
import Markdown from '@/components/markdown/editor.vue'
import WangEditor from '@/components/wangeditor/index.vue'
import { ref } from 'vue'

const props = defineProps<{
  model: Record<string, any>
  fields: FormFieldType[]
}>()

const model = ref(props.model)
const emit = defineEmits<{
  (e: 'submit', model: any): void
}>()
</script>

<template>
  <n-form ref="formRef" :model="model" label-width="auto" label-align="right" label-placement="left" size="large">
    <n-form-item :path="field.name" :label="field.title" v-for="field in fields" :key="field.name">
      <template v-if="field.type === 'input' || !field.type">
        <n-input
          v-model:value="model[field.name]"
          type="text"
          :placeholder="field.placeholder"
          :disabled="field.disabled"
          clearable></n-input>
      </template>
      <template v-if="field.type === 'select'">
        <n-select v-model:value="model[field.name]" :options="field.options" />
      </template>
      <template v-if="field.type === 'switch'">
        <n-switch v-model:value="model[field.name]" />
      </template>
      <template v-if="field.type === 'radio'">
        <n-radio-group v-model:value="model[field.name]" name="radiogroup">
          <n-space>
            <n-radio v-for="option in field.options" :key="option.value" :value="option.value">
              {{ option.label }}
            </n-radio>
          </n-space>
        </n-radio-group>
      </template>
      <template v-if="field.type === 'inputNumber'">
        <n-input-number v-model:value="model[field.name]" clearable />
      </template>
      <template v-if="field.type === 'textarea'">
        <n-input v-model:value="model[field.name]" type="textarea" :placeholder="field.placeholder" clearable></n-input>
      </template>
      <template v-if="field.type === 'image'">
        <n-image width="100" :src="model[field.name]" />
      </template>
      <template v-if="field.type === 'markdown'">
        <Markdown v-model="model[field.name]" />
      </template>
      <template v-if="field.type === 'wangEditor'">
        <WangEditor v-model="model[field.name]" />
      </template>
    </n-form-item>
    <n-form-item>
      <slot name="button" v-if="$slots.button" />

      <n-button v-else attr-type="button" @click="emit('submit', model)"> 提交 </n-button>
    </n-form-item>
  </n-form>
</template>

<style scoped lang="scss"></style>
