<script lang="ts" setup>
import { NButton, NSpace } from 'naive-ui'
import type { TableButton } from '@/config/table'
import { pageSizes } from '@/config/table'

const props = withDefaults(
  defineProps<{
    columns: any[]
    height: number
    button?: TableButton[]
    size?: 'small' | 'medium' | 'large'
    striped?: boolean
    api: (page?: number) => Promise<ResponseResult<Record<any, any>>>
  }>(),
  {
    height: null,
    size: 'medium',
    striped: true,
  },
)
const emit = defineEmits<{
  (e: 'action', mode: Record<string, any>, command: string): void
}>()

const { size, columns } = toRefs(props)

if (props.button) {
  const hasAction = columns.value.some(item => item.key === 'actions')
  if (!hasAction) {
    columns.value.push({
      key: 'actions',
      title: '操作',
      type: 'actions',
      render: row => h(
        NSpace,
        {},
        {
          default: () =>
            props.button.map(action => h(
              NButton,
              {
                ...action.props,
                onClick() { emit('action', row, action.command) },
              },
              { default: isRenderButtonText(action) ? null : () => action.title },
            )),
        },
      ),
    })
  }
}

function isRenderButtonText(action: TableButton) {
  return action.props.renderIcon && !action.title
}

const loading = ref(false)
const response = ref(null)

load(1)
async function load(page: number) {
  try {
    loading.value = true
    response.value = await props.api(page)
  }
  catch (error) {
    throw new Error(`加载数据错误${error}`)
  }
  finally {
    loading.value = false
  }
}
const pagination = ref({
  pageSize: response.value?.meta?.page_size,
  pageCount: response.value?.meta?.total,
  page: response.value?.meta?.current_page,
  pageSizes,
  showQuickJumper: true,
  showSizePicker: true,
})
</script>

<template>
  <main pb-2>
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
