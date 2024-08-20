<script lang="ts" setup>
import useAuth from '@/composables/useAuth'

const { accountLogin, accountLoginForm, loading } = useAuth()

async function onSubmit() {
  // TODO 表单校验
  accountLogin()
}
</script>

<template>
  <div>
    <main class="flex flex-col gap-2">
      <NH2 class="text-left">
        欢迎回来
      </NH2>
      <span />
      <div class="flex flex-col">
        <span class="mb-1">用户名</span>
        <NInput v-model:value="accountLoginForm.username" />
      </div>
      <div class="flex flex-col">
        <span class="mb-1">密码</span>
        <NInput v-model:value="accountLoginForm.password" type="password" show-password-on="mousedown" />
      </div>
    </main>

    <div class="mt-4 flex flex-col justify-center gap-3">
      <NButton type="primary" :loading="loading" @click="onSubmit">
        登录
      </NButton>
    </div>
    <div class="grid grid-cols-2 mt-4 gap-3">
      <NButton @click="$router.push({ name: 'auth.mobile' })">
        手机号登录
      </NButton>
      <NButton @click="$router.push({ name: 'auth.qrcode' })">
        扫码登录
      </NButton>
    </div>
    <div class="mt-2 flex justify-end">
      <NSpace>
        <NButton type="primary" text @click="$router.push({ name: 'auth.forgetPassword' })">
          忘记密码
        </NButton>
        <NButton type="primary" text @click="$router.push({ name: 'auth.register' })">
          注册
        </NButton>
      </NSpace>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
