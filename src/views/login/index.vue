<script lang="ts" setup>
import LoginForm from './LoginForm/index.vue'
</script>

<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="container p-2 bg-white border shadow-xl rounded-xl md:p-9 border-slate-200">
      <n-h2 class="text-center">Sable Admin</n-h2>
      <p class="text-sm text-center text-gray-400">Naive UI 中后台前端解决方案</p>
      <main class="flex items-center justify-between">
        <div class="flex items-center justify-center flex-1">
          <LoginForm></LoginForm>
        </div>
        <img src="../../assets/login-bg.svg" class="hidden w-1/3 md:block" :draggable="false" />
      </main>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
