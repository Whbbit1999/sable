<script lang="ts" setup>
const handleUpdateChecked = (value: boolean) => {};
</script>

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
    <div>
      <n-checkbox
        checked-value="周末加班"
        unchecked-value="周末支持一下"
        @update:checked="handleUpdateChecked"
      >
        自动登录
      </n-checkbox>
      <n-button
        text
        tag="a"
        href="https://anyway.fm/news.php"
        target="_blank"
        type="primary"
      >
        忘记密码
      </n-button>
    </div>
    <div class="flex flex-col gap-3 mt-4 justify-center">
      <n-button type="primary">登录</n-button>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
