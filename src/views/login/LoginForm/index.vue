<script lang="ts" setup></script>

<template>
  <div class="mx-2">
    <main class="flex flex-col gap-2">
      <div class="flex flex-col">
        <span class="mb-1">用户名</span>
        <input class="bg-transparent border-1 border-rd outline-0 px-2 py-1" />
      </div>
      <div class="flex flex-col">
        <span class="mb-1">密码</span>
        <input class="bg-transparent border-1 border-rd outline-0 px-2 py-1" />
      </div>
    </main>
    <div class="flex flex-col gap-3 mt-4 justify-center">
      <NButton class="w-full" type="primary"> 登录 </NButton>
      <div class="flex gap-1 justify-between">
        <NButton type="warning" quaternary>忘记密码</NButton>
        <NButton type="primary" quaternary>注册账户</NButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
