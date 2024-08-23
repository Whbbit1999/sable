import { CacheEnum, RouteNameEnum } from '@sable/enum'
import { login } from '@sable/api'
import { storage } from '@sable/utils'

interface AccountLoginForm {
  username: string
  password: string
}

export default function useAuth() {
  const userStore = useUserStore()
  const router = useRouter()
  const loading = ref(false)

  const accountLoginForm = ref<AccountLoginForm>({
    username: 'sable',
    password: '123456',
  })
  async function accountLogin() {
    try {
      loading.value = true
      const res = await login(unref(accountLoginForm))
      storage.set(CacheEnum.TOKEN, res.data.token)
      router.push({ name: RouteNameEnum.HOME })
    }
    catch (error) {
      console.error(error)
    }
    finally {
      loading.value = false
    }
  }

  function logout() {
    storage.remove(CacheEnum.TOKEN)
    userStore.$reset()

    router.push({ name: RouteNameEnum.LOGIN })
  }

  return {
    logout,
    loading,
    accountLoginForm,
    accountLogin,
  }
}
