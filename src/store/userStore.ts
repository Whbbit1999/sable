import { getUserInfoApi } from '@/api/userApi'
import { defineStore } from 'pinia'

export const userStore = defineStore('userStore', {
  state: () => {
    return {
      userInfo: null,
    }
  },
  getters: {},
  actions: {
    async getUserInfo(): Promise<IUserModel> {
      const { code, data } = await getUserInfoApi()

      this.userInfo = data
      return this.userInfo
    },
  },
})
