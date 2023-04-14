<script lang="ts" setup>
import { TableButton, pageSizes } from '@/config/table'
import { ref } from 'vue'

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
      :columns="props.columns"
      :data="response.data"
      virtual-scroll
      striped
      :max-height="props.height"
      :pagination="pagination"
      :on-update:page="load" />
  </main>
</template>

<style scoped lang="scss"></style>
