<script lang="ts" setup>
import { TableButton, pageSizes } from '@/config/table'
import { NButton, NSpace } from 'naive-ui'

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
    height: 250,
    size: 'medium',
    striped: true,
  },
)
const columns = computed(() => {
  return props.columns
})

if (props.button) {
  const hasAction = columns.value.some((item) => item.key === 'actions')
  if (!hasAction) {
    columns.value.push({
      key: 'actions',
      title: '操作',
      type: 'actions',
      render: (row) =>
        h(
          NSpace,
          {},
          {
            default: () =>
              props.button.map((action) =>
                h(
                  NButton,
                  {
                    type: action.type || 'default',
                    onClick() {
                      console.log(action.command)
                      emit('action', row, action.command)
                    },
                  },
                  { default: () => action.title },
                ),
              ),
          },
        ),
    })
  }
}

const emit = defineEmits<{
  (e: 'action', mode: Record<string, any>, command: string): void
}>()
const loading = ref(false)
const response = ref(await props.api())

async function load(page: number) {
  try {
    loading.value = true
    response.value = await props.api(page)
  } catch (error) {
    throw new Error('加载数据错误' + error)
  } finally {
    loading.value = false
  }
}
const pagination = ref({
  pageSize: response.value.meta.page_size,
  pageCount: response.value.meta.total,
  page: response.value.meta.current_page,
  pageSizes,
  showQuickJumper: true,
  showSizePicker: true,
})
</script>

<template>
  <main class="pb-2">
    <n-data-table
      :loading="loading"
      :columns="columns"
      :data="response.data"
      :striped="striped"
      :size="size"
      :max-height="props.height"
      :pagination="pagination"
      :on-update:page="load">
      <template #empty>
        <n-empty description="暂无数据"></n-empty>
      </template>
    </n-data-table>
  </main>
</template>

<style scoped lang="scss"></style>
