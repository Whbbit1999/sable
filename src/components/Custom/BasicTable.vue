<script lang="ts" setup>
import { TableButton, pageSizes } from '@/config/table'
import { NButton, NSpace } from 'naive-ui'
import { computed, h, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    columns: any[]
    height: number
    button?: TableButton[]
    api: (page?: number) => Promise<ResponsePageResult<Record<any, any>>>
  }>(),
  {
    height: 250,
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
  loading.value = true
  response.value = await props.api(page)
  loading.value = false
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
  <main>
    <n-data-table
      :loading="loading"
      :columns="columns"
      :data="response.data"
      virtual-scroll
      striped
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
