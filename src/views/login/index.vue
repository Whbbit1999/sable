<script lang="ts" setup>
import LoginForm from './LoginForm/index.vue';
</script>

<template>
  <div class="min-h-screen flex justify-center pt-15">
    <div class="login p-3 rounded transition">
      <n-h2 class="text-center">Sable Admin</n-h2>
      <p class="text-sm text-center text-gray-400">Naive UI 中后台前端解决方案</p>
      <main>
        <LoginForm></LoginForm>
      </main>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
