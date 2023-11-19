import { defineStore } from 'pinia'
import { getUserInfoApi } from '@/api/userApi'

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: null,
  }),
  getters: {},
  actions: {
    async getUserInfo(): Promise<IUserModel> {
      const { data } = await getUserInfoApi()

      this.userInfo = data
      return this.userInfo
    },
  },
})
