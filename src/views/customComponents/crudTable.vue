<script setup lang="ts">
import { userList } from '@/api/userApi'
import { UserTableButton, UserTableField } from '@/config/table'

function handleActions() {
  // TODO 点击操作后
}
</script>

<template>
  <div>
    <BasicTable
      :columns="UserTableField"
      :api="userList"
      :button="UserTableButton"
      @action="handleActions"
    />
  </div>
</template>

<style scoped lang="scss"></style>
