<script lang="ts" setup>
import { LogOutOutline as LogoutIcon, PersonCircleOutline as UserIcon } from '@vicons/ionicons5'
import dayjs from 'dayjs'
import Notify from '@/components/Notify/index.vue'
import config from '@/config/config'
import { renderIcon, storage } from '@/utils'

const router = useRouter()

const userStore = useUserStore()
const userInfo = await userStore.getUserInfo()

const options = ref([
  { label: '个人空间', key: 'userspace', icon: renderIcon(UserIcon) },
  { label: '退出登录', key: 'logout', icon: renderIcon(LogoutIcon) },
])

function onSelect(key: string) {
  switch (key) {
    case 'userspace':
      router.push({ name: 'user.base' })
      break
    case 'logout':
      logout()
      break
  }
}

function logout() {
  // 清空缓存
  storage.remove('token')
  // 清空pinia中的数据
  userStore.$reset()

  router.push({ name: RouteNameEnum.LOGIN })
}
</script>

<template>
  <header class="flex items-center justify-between p-2 m-2 rounded-md">
    <div flex items-center gap-4>
      <Breadcrump v-if="config.layout.showBreadCrump" />
    </div>

    <div class="flex-1" />

    <div class="flex items-center gap-2 ">
      <FullScreen />

      <Notify />

      <ToggleTheme />

      <NDropdown :options="options" :on-select="onSelect">
        <div class="flex items-center px-3 py-1 rounded-md duration-300" bg="hover:gray/20">
          <!-- 头像 -->
          <NAvatar class="mr-2" :size="20" round :src="userInfo?.avatar" />
          <!-- 用户名/注册时间 -->
          <div class="flex flex-col ml-2">
            <span class="text-md">{{ userInfo?.name }}</span>
            <!-- <span class="text-sm text-gray-500">{{ dayjs(userInfo?.createdAt).format('YYYY/MM/DD') }}</span> -->
          </div>
        </div>
      </NDropdown>
    </div>
  </header>
</template>

<style scoped lang="scss"></style>
