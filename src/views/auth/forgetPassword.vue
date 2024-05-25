<script lang="ts" setup>
import { login } from '@/api/userApi'
import { storage } from '@/utils'

const loading = ref<boolean>(false)
const loginFormData = ref<ILoginForm>({
  username: 'sable',
  password: '123456',
})
const router = useRouter()
async function onSubmit() {
  try {
    loading.value = true
    const res = await login(unref(loginFormData))
    storage.set('token', res.data.token, 30)
    router.push({ name: RouteNameEnum.HOME })
  }
  catch (error) {
    throw new Error(error)
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <div>
    <main class="flex flex-col gap-2">
      <NH2 class="text-center">
        找回密码
      </NH2>
      <div class="flex flex-col">
        <span class="mb-1">邮箱</span>
        <NInput v-model:value="loginFormData.username" />
      </div>
      <div class="flex flex-col">
        <span class="mb-1">验证码</span>
        <NInput v-model:value="loginFormData.password" type="password" show-password-on="mousedown" />
      </div>
    </main>

    <div class="flex flex-col justify-center gap-3 mt-4">
      <NButton type="primary" :loading="loading" @click="onSubmit">
        找回密码
      </NButton>
    </div>
    <div class="flex justify-end mt-2">
      <NSpace>
        <NButton type="primary" text @click="$router.push({ name: 'auth.login' })">
          返回登录
        </NButton>
      </NSpace>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
