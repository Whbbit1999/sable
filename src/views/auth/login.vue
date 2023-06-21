<script lang="ts" setup>
import type { ILoginForm } from '@/api/userApi'
import { login } from '@/api/userApi'
import { storage } from '@/utils'
import { ref, unref } from 'vue'
import { useRouter } from 'vue-router'

const loading = ref<boolean>(false)
const loginFormData = ref<ILoginForm>({
  username: 'sable',
  password: '123456',
})
const router = useRouter()
const onSubmit = async () => {
  try {
    loading.value = true
    const res = await login(unref(loginFormData))
    console.log(res.data.token)
    storage.set('token', {
      token: res.data.token,
      expire: 60 * 30,
    })
    router.push({ name: 'dashboard.home' })
  } catch (error) {
    throw new Error(error)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div>
    <main class="flex flex-col gap-2">
      <n-h2 class="text-center">用户登录</n-h2>
      <div class="flex flex-col">
        <span class="mb-1">用户名</span>
        <n-input v-model:value="loginFormData.username"></n-input>
      </div>
      <div class="flex flex-col">
        <span class="mb-1">密码</span>
        <n-input v-model:value="loginFormData.password" type="password" show-password-on="mousedown"></n-input>
      </div>
    </main>

    <div class="flex flex-col justify-center gap-3 mt-4">
      <n-button type="primary" @click="onSubmit" :loading="loading">登录</n-button>
    </div>
    <div class="flex justify-end mt-2">
      <n-space>
        <n-button type="primary" text @click="$router.push({ name: 'auth.forgetPassword' })">忘记密码</n-button>
        <n-button type="primary" text @click="$router.push({ name: 'auth.register' })">注册</n-button>
      </n-space>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
