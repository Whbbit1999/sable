<script lang="ts" setup>
import type { DataTableColumns, PaginationProps } from 'naive-ui'
import { ref, unref } from 'vue'

type RowData = {
  key: number
  name: string
  age: number
  address: string
  tags: string[]
}
type CRUDTableParams = {
  pageSize: number
  pageNumber: number
}
// const pagination = reactive({ page: 1, pagination: 10 , })

const emits = defineEmits(['onChecked'])
const props = defineProps<{
  columns: DataTableColumns<RowData>
  pagination?: PaginationProps
  remote?: boolean
  getData: Function
}>()

const data = ref()
const loading = ref(false)
const params = ref<CRUDTableParams>({ pageNumber: 1, pageSize: 10 })
const handleQuery = async (query: CRUDTableParams = { pageNumber: 1, pageSize: 10 }) => {
  try {
    loading.value = true

    const res = await props.getData(query)
    console.log(res.data.data)
    data.value = res.data.data
  } catch (error) {
    data.value = []
  } finally {
    loading.value = false
  }
}

// selected row
const onChecked = (rowKeys) => {
  if (props.columns.some((item) => item.type === 'selection')) {
    emits('onChecked', rowKeys)
  }
}
// current page change
const onPageChange = (page: number) => {
  params.value.pageNumber = page
  params.value.pageSize = params.value.pageSize ?? 10
  handleQuery(unref(params))
}

// page size change
const onPageSizeChange = (pageSize: number) => {
  params.value.pageSize = pageSize
  params.value.pageNumber = params.value.pageNumber ?? 1
  handleQuery(unref(params))
}
await handleQuery()
</script>

<template>
  <main>
    <n-data-table
      :remote="remote"
      :loading="loading"
      :columns="columns"
      :data="data"
      :pagination="pagination"
      @update:checked-row-keys="onChecked"
      @update:page="onPageChange"
      @update:pageSize="onPageSizeChange"></n-data-table>
  </main>
</template>

<style scoped lang="scss"></style>
