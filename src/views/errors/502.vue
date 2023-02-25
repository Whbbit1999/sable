<script lang="ts" setup>
import { ArrowBackOutline } from '@vicons/ionicons5'
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen p-10">
    <img draggable="false" class="w-2/3" src="../../../public/images/5xx.svg" alt="" />
    <p class="my-3 text-3xl text-gray-500">网站暂时无法访问</p>
    <n-button @click="$router.push({ name: 'disboard.home' })">
      <n-icon class="mr-1"><ArrowBackOutline /></n-icon>
      返回首页
    </n-button>
  </div>
</template>

<style scoped lang="scss"></style>
