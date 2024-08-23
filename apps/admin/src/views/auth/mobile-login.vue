<script lang="ts" setup>
const loading = ref<boolean>(false)
const loginFormData = ref({
  phone: '',
  code: '',
})
</script>

<template>
  <div>
    <main class="flex flex-col gap-2">
      <NH2 class="text-left">
        欢迎回来
      </NH2>
      <span />
      <div class="flex flex-col">
        <span class="mb-1">手机号</span>
        <NInput v-model:value="loginFormData.phone" />
      </div>
      <div class="flex flex-col">
        <span class="mb-1">验证码</span>
        <div class="grid grid-cols-2 gap-2">
          <NInput v-model:value="loginFormData.code" />
          <NButton type="primary" :loading="loading">
            获取验证码
          </NButton>
        </div>
      </div>
    </main>

    <div class="mt-4 flex flex-col justify-center gap-3">
      <NButton type="primary" :loading="loading">
        登录
      </NButton>
    </div>

    <div class="mt-4">
      <NButton block @click="$router.go(-1)">
        返回
      </NButton>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
