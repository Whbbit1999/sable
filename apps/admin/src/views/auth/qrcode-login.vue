<script lang="ts" setup>
const text = 'http://localhost:7788'
</script>

<template>
  <div>
    <main class="flex flex-col gap-2">
      <NH2 class="text-left">
        欢迎回来
      </NH2>
      <span>请使用手机扫描二维码登录</span>

      <div class="my-2 flex items-center justify-center">
        <n-qr-code :value="text" :size="200" />
      </div>
    </main>

    <div class="mt-4 flex flex-col justify-center gap-3" />
    <NButton block @click="$router.go(-1)">
      返回
    </NButton>
  </div>
</template>

<style scoped lang="scss"></style>
