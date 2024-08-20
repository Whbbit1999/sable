<!-- eslint-disable no-console -->
<script setup lang="ts">
import { userList } from '@sable/api'
import type { TableButton } from '@/config/table'
import { UserTableButton, UserTableField } from '@/config/table'

function handleActions(row: any, key: TableButton['command']) {
  // TODO 点击操作后
  if (key === 'edit')
    console.log(row, key)

  if (key === 'delete')
    console.log(row, key)
}
</script>

<template>
  <div>
    <BasicTable
      :columns="UserTableField"
      :api="userList"
      :actions="UserTableButton"
      :show-search="true"
      @action="handleActions"
    />
  </div>
</template>

<style scoped lang="scss"></style>
