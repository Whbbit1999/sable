<script setup lang="ts">
import { userList } from '@/api/userApi'
import { UserTableButton, UserTableField } from '@/config/table'

function handleActions() {
  // console.log(args)
  // TODO 点击操作后
}
</script>

<template>
  <div>
    <BasicTable
      :columns="UserTableField"
      :api="userList"
      :height="800"
      :button="UserTableButton"
      @action="handleActions"
    />
  </div>
</template>

<style scoped lang="scss"></style>
