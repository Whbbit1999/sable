<script setup lang="ts">
import { userList } from '@/api/userApi'
import BasicTable from '@/components/Custom/BasicTable.vue'
import { UserTableField } from '@/config/table'
</script>

<template>
  <BasicTable :columns="UserTableField" :api="userList" :height="400" />
</template>

<style scoped lang="scss"></style>
