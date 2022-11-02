<script lang="ts" setup>
import { login } from '@/api/user'
import type { ILoginForm } from '@/api/user'
import { ref, unref } from 'vue'
import { storage } from '@/utils'
const handleUpdateChecked = (value: boolean) => {}

const loginFormData = ref<ILoginForm>({
  username: 'sable',
  password: '123456',
})

const onSubmit = async () => {
  const res = await login(unref(loginFormData))
  console.log(res.data.token)
  storage.set('token', {
    token: res.data.token,
    expire: 60 * 20,
  })
}
</script>

<template>
  <div class="mx-2">
    <main class="flex flex-col gap-2">
      <div class="flex flex-col">
        <span class="mb-1">用户名</span>
        <n-input v-model:value="loginFormData.username"></n-input>
      </div>
      <div class="flex flex-col">
        <span class="mb-1">密码</span>
        <n-input v-model:value="loginFormData.password" type="password"></n-input>
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
