<script lang="ts" setup>
import { getUserInfoApi } from '@/api/user'

const userInfo = await getUserInfoApi()
console.log(userInfo.data.name)
</script>

<template>
  <div>home.vue</div>
  <n-button>Default</n-button>
  <n-card title="卡片" hoverable> 卡片内容 </n-card>
</template>

<style scoped lang="scss"></style>
