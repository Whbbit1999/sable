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
        用户登录
      </NH2>
      <div class="flex flex-col">
        <span class="mb-1">用户名</span>
        <NInput v-model:value="loginFormData.username" />
      </div>
      <div class="flex flex-col">
        <span class="mb-1">密码</span>
        <NInput v-model:value="loginFormData.password" type="password" show-password-on="mousedown" />
      </div>
    </main>

    <div class="mt-4 flex flex-col justify-center gap-3">
      <NButton type="primary" :loading="loading" @click="onSubmit">
        登录
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
    <div class="absolute right-10px top-10px flex items-center gap-2">
      <FullScreen />
      <ToggleTheme />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
