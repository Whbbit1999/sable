<script lang="ts" setup>
import LoginForm from "./LoginForm/index.vue";
</script>

<template>
  <div
    class="bg-bluegray-800 min-h-screen text-gray-200/50 flex items-center justify-center"
  >
    <div
      class="login bg-gray-700 p-3 rounded hover:bg-gray-600 transition shadow"
    >
      <h2 class="text-lg text-center">登录</h2>
      <main>
        <LoginForm></LoginForm>
      </main>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
