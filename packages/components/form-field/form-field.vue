<script lang="ts" setup>
import { ref } from 'vue'
import {
  NButton,
  NCheckbox,
  NCheckboxGroup,
  NForm,
  NFormItem,
  NInput,
  NInputNumber,
  NRadio,
  NRadioGroup,
  NSelect,
  NSpace,
  NSwitch,
} from 'naive-ui'
import { MarkdownEditor, Quill } from '@sable/components'
import type { FormFieldType } from '@sable/types'
import type { SelectOption } from 'naive-ui'

interface Props {
  model: Record<string, any>
  fields: FormFieldType[]

  labelWidth?: number | 'auto'
  labelAlign?: 'left' | 'center' | 'right'
  labelPlacement?: 'left' | 'top'
  size?: 'small' | 'medium' | 'large'
}

const props = withDefaults(defineProps<Props>(), {
  labelWidth: 'auto',
  labelAlign: 'right',
  labelPlacement: 'left',
  size: 'large',
})

const emit = defineEmits<{
  (e: 'submit', model: any): void
}>()

const model = ref(props.model)
</script>

<template>
  <NForm
    :model="model"
    :label-width="labelWidth"
    :label-align="labelAlign"
    :label-placement="labelPlacement"
    :size="size"
  >
    <NFormItem v-for="field in fields" :key="field.name" :path="field.name" :label="field.title">
      <template v-if="field.type === 'input'">
        <NInput v-model:value="model[field.name]" type="text" :placeholder="field.placeholder" :disabled="field.disabled" clearable />
      </template>
      <template v-else-if="field.type === 'textarea'">
        <NInput v-model:value="model[field.name]" type="textarea" :placeholder="field.placeholder" :disabled="field.disabled" clearable />
      </template>
      <template v-else-if="field.type === 'select'">
        <NSelect v-model:value="model[field.name]" :options="(field.options) as SelectOption[]" />
      </template>
      <template v-else-if="field.type === 'switch'">
        <NSwitch v-model:value="model[field.name]" />
      </template>
      <template v-else-if="field.type === 'inputNumber'">
        <NInputNumber v-model:value="model[field.name]" clearable />
      </template>
      <template v-else-if="field.type === 'radio'">
        <NRadioGroup v-model:value="model[field.name]" name="radiogroup">
          <NSpace>
            <NRadio
              v-for="option in field.options" :key="option.value"
              :value="option.value" :disabled="option.disabled"
            >
              {{ option.label }}
            </NRadio>
          </NSpace>
        </NRadioGroup>
      </template>
      <template v-else-if="field.type === 'markdown'">
        <MarkdownEditor v-model="model[field.name]" />
      </template>
      <template v-else-if="field.type === 'richEditor'">
        <Quill v-model="model[field.name]" />
      </template>
      <template v-else-if="field.type === 'checkbox'">
        <NCheckboxGroup v-model:value="model[field.name]">
          <NSpace>
            <NCheckbox
              v-for="option in field.options" :key="option.value"
              :value="option.value" :label="option.label"
              :disabled="option.disabled"
            />
          </NSpace>
        </NCheckboxGroup>
      </template>
    </NFormItem>
    <NFormItem>
      <slot v-if="$slots.button" name="button" />

      <NButton v-else attr-type="button" @click="emit('submit', model)">
        提交
      </NButton>
    </NFormItem>
  </NForm>
</template>

<style>

</style>
