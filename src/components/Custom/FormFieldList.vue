<script lang="ts" setup>
import Markdown from '@/components/markdown/editor.vue'
import type { FormFieldType } from '@/config/form'

const props = defineProps<{
  model: Record<string, any>
  fields: FormFieldType[]
}>()

const emit = defineEmits<{
  (e: 'submit', model: any): void
}>()

const model = ref(props.model)
</script>

<template>
  <NForm :model="model" label-width="auto" label-align="right" label-placement="left" size="large">
    <NFormItem v-for="field in fields" :key="field.name" :path="field.name" :label="field.title">
      <template v-if="field.type === 'input' || !field.type">
        <NInput
          v-model:value="model[field.name]"
          type="text"
          :placeholder="field.placeholder"
          :disabled="field.disabled"
          clearable
        />
      </template>
      <template v-if="field.type === 'select'">
        <NSelect v-model:value="model[field.name]" :options="field.options" />
      </template>
      <template v-if="field.type === 'switch'">
        <NSwitch v-model:value="model[field.name]" />
      </template>
      <template v-if="field.type === 'radio'">
        <NRadioGroup v-model:value="model[field.name]" name="radiogroup">
          <NSpace>
            <NRadio v-for="option in field.options" :key="option.value" :value="option.value">
              {{ option.label }}
            </NRadio>
          </NSpace>
        </NRadioGroup>
      </template>
      <template v-if="field.type === 'inputNumber'">
        <NInputNumber v-model:value="model[field.name]" clearable />
      </template>
      <template v-if="field.type === 'textarea'">
        <NInput v-model:value="model[field.name]" type="textarea" :placeholder="field.placeholder" clearable />
      </template>
      <template v-if="field.type === 'image'">
        <NImage width="100" :src="model[field.name]" />
      </template>
      <template v-if="field.type === 'markdown'">
        <Markdown v-model="model[field.name]" />
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

<style scoped lang="scss"></style>
