<script setup lang="ts">
import { userList } from '@/api/userApi'
import BasicTable from '@/components/Custom/BasicTable.vue'
import { UserTableButton, UserTableField } from '@/config/table'
const handleActions = (...args) => {
  console.log(args)
}
</script>

<template>
  <div>
    <BasicTable
      :columns="UserTableField"
      :api="userList"
      :height="800"
      :button="UserTableButton"
      @action="handleActions" />
  </div>
</template>

<style scoped lang="scss"></style>
