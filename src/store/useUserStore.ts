import { defineStore } from 'pinia'
import { getUserInfoApi } from '@/api/userApi'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref<IUserModel>(null)

  async function getUserInfo(): Promise<IUserModel> {
    const { data } = await getUserInfoApi()

    userInfo.value = data
    return userInfo.value
  }

  return {
    userInfo,
    getUserInfo,
  }
})
