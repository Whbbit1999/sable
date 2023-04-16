<script setup lang="ts">
import { userList } from '@/api/userApi'
import BasicTable from '@/components/Custom/BasicTable.vue'
import { UserTableField, UserTableButton } from '@/config/table'
const handleActions = (...args) => {
  console.log(args)
}
</script>

<template>
  <BasicTable
    :columns="UserTableField"
    :api="userList"
    :height="800"
    :button="UserTableButton"
    @action="handleActions" />
</template>

<style scoped lang="scss"></style>
