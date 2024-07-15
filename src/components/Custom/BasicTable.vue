<script lang="ts" setup>
import { NButton, NSpace } from 'naive-ui'
import { cloneDeep } from 'lodash-es'
import type { FormInst } from 'naive-ui'
import type { TableButton } from '@/config/table'
import { pageSizes } from '@/config/table'

const props = withDefaults(
  defineProps<{
    columns: any[]
    height?: number
    actions?: TableButton[]
    size?: 'small' | 'medium' | 'large'
    striped?: boolean
    api: (params: Record<string, any>) => Promise<ResponseResult<Record<any, any>>>
    showSearch?: boolean
  }>(),
  {
    height: 800,
    size: 'medium',
    striped: true,
    showSearch: true,
  },
)
const emit = defineEmits<{
  (e: 'action', mode: Record<string, any>, command: TableButton['command']): void
}>()

const { size, columns, actions, showSearch } = toRefs(props)

if (actions.value) {
  const hasAction = columns.value.some(item => item.key === 'actions')
  if (!hasAction) {
    columns.value.push({
      key: 'actions',
      title: '操作',
      type: 'actions',
      search: false,
      render: row => renderActionColumn(row),
    })
  }
}

function renderActionColumn(row) {
  return h(
    NSpace,
    {},
    {
      default: () =>
        actions.value.map(action => h(
          NButton,
          {
            ...action.props,
            onClick() { emit('action', row, action.command) },
          },
          { default: isRenderButtonText(action) ? null : () => action.title },
        )),
    },
  )
}

function isRenderButtonText(action: TableButton) {
  return action.props.renderIcon && !action.title
}

interface SearchFormConfig {
  key: string
  type: string
  value: any
  label: string
}
function createSearchFormConfig(columns): SearchFormConfig[] {
  const result = []
  for (const column of columns) {
    if (typeof column.search === 'boolean' && column.search === false)
      continue

    result.push({
      key: column.key,
      type: column.searchType || 'input',
      value: null,
      label: column.title,
    })
  }
  return result
}
function createSearchFormValue(config: SearchFormConfig[] | Ref<SearchFormConfig[]>): Record<string, any> {
  const _config = unref(config)
  const result = {}
  for (const item of _config)
    result[item.key] = item.value

  return result
}

const loading = ref(false)
const response = ref(null)

async function load(page: number, params?: Record<string, any>) {
  try {
    loading.value = true

    response.value = await props.api({
      page,
      ...params,
    })
  }
  catch (error) {
    throw new Error(`加载数据错误${error}`)
  }
  finally {
    loading.value = false
  }
}
load(1)

const pagination = ref({
  pageSize: response.value?.meta?.page_size,
  pageCount: response.value?.meta?.total,
  page: response.value?.meta?.current_page,
  pageSizes,
  showQuickJumper: true,
  showSizePicker: true,
})

// form
const formRef = ref<FormInst | null>(null)
const searchFormConfig = ref(createSearchFormConfig(columns.value))
const searchFormValue = ref(createSearchFormValue(searchFormConfig))
const cacheInitFormValue = cloneDeep(searchFormValue.value)

async function handleSearch() {
  load(1, searchFormValue.value)
}
async function handleReset() {
  searchFormValue.value = { ...cacheInitFormValue }
  load(1, searchFormValue.value)
}
</script>

<template>
  <main pb-2>
    <n-form
      v-if="showSearch"
      ref="formRef"
      inline
      label-placement="left"
      label-width="auto"
      :model="searchFormValue"
      :size="size"
    >
      <n-form-item
        v-for="config in searchFormConfig" :key="config.key"
        :label="config.label"
      >
        <template v-if="config.type === 'input' || !config.type">
          <NInput
            v-model:value="searchFormValue[config.key]"
            type="text"
            clearable
          />
        </template>

        <template v-if="config.type === 'date'">
          <n-date-picker
            v-model:formatted-value="searchFormValue[config.key]"
            value-format="yyyy.MM.dd HH:mm:ss"
            type="datetime"
            clearable
          />
        </template>
      </n-form-item>

      <n-form-item>
        <NSpace>
          <NButton type="primary" attr-type="button" @click="handleSearch">
            查询
          </NButton>
          <NButton attr-type="reset" @click="handleReset">
            重置
          </NButton>
        </NSpace>
      </n-form-item>
    </n-form>

    <NDataTable
      :loading="loading"
      :columns="columns"
      :data="response?.data"
      :striped="striped"
      :size="size"
      :max-height="props.height"
      :pagination="pagination"
      :on-update:page="load"
    >
      <template #empty>
        <NEmpty description="暂无数据" />
      </template>
    </NDataTable>
  </main>
</template>

<style scoped lang="scss"></style>
