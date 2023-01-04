<script lang="ts" setup>
import { login } from '@/api/user'
import type { ILoginForm } from '@/api/user'
import { ref, unref } from 'vue'
import { storage } from '@/utils'
import { useRouter } from 'vue-router'

const handleUpdateChecked = (value: boolean) => {}

const loginFormData = ref<ILoginForm>({
  username: 'sable',
  password: '123456',
})
const router = useRouter()
const onSubmit = async () => {
  const res = await login(unref(loginFormData))
  console.log(res.data.token)
  storage.set('token', {
    token: res.data.token,
    expire: 60 * 20,
  })
  router.push({ name: 'home' })
}
</script>

<template>
  <div class="w-full md:w-3/5 md:shadow-xl p-1 md:p-10 rounded-md border-0 md:border border-slate-200">
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
    <div>
      <n-checkbox checked-value="周末加班" unchecked-value="周末支持一下" @update:checked="handleUpdateChecked">
        自动登录
      </n-checkbox>
      <n-button text tag="a" href="https://anyway.fm/news.php" target="_blank" type="primary"> 忘记密码 </n-button>
    </div>
    <div class="flex flex-col gap-3 mt-4 justify-center">
      <n-button type="primary" @click="onSubmit">登录</n-button>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
