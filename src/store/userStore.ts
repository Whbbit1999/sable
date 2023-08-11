import { defineStore } from 'pinia'
import { getUserInfoApi } from '@/api/userApi'

export const userStore = defineStore('userStore', {
  state: () => {
    return {
      userInfo: null,
    }
  },
  getters: {},
  actions: {
    async getUserInfo(): Promise<IUserModel> {
      const { data } = await getUserInfoApi()

      this.userInfo = data
      return this.userInfo
    },
  },
})
