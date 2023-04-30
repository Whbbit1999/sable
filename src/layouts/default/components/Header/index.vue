<script lang="ts" setup>
import Breadcrump from '@/components/Custom/Breadcrump.vue'
import FullScreen from '@/components/Custom/FullScreen.vue'
import useWait from '@/composables/useWait'
import config from '@/config/config'
import { appStore } from '@/store/appStore'
import { themeStore } from '@/store/themeStore'
import { userStore } from '@/store/userStore'
import { renderIcon, storage } from '@/utils'
import {
  ChevronBackOutline,
  LogOutOutline as LogoutIcon,
  MoonOutline,
  SunnyOutline,
  PersonCircleOutline as UserIcon,
} from '@vicons/ionicons5'
import dayjs from 'dayjs'
import { useNotification } from 'naive-ui'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const theme = themeStore()

const user = userStore()
const userInfo = await user.getUserInfo()

const options = ref([
  {
    label: '个人空间',
    key: 'userspace',
    icon: renderIcon(UserIcon),
  },
  {
    label: `外观：${theme.getTheme ? '暗色主题' : '亮色主题'}`,
    key: 'theme',
    icon: renderIcon(theme.getTheme ? SunnyOutline : MoonOutline),
  },
  {
    label: '退出登录',
    key: 'logout',
    icon: renderIcon(LogoutIcon),
  },
])

const onSelect = (key, option) => {
  switch (key) {
    case 'theme':
      handleChangeTheme(key, option)
      break
    case 'userspace':
      router.push({ name: 'user.base' })
      break
    case 'logout':
      logout()
      break
  }
}
const notification = useNotification()

const handleChangeTheme = (key, option) => {
  useWait().createWaiting(notification)

  theme.toggleTheme()

  const index = options.value.indexOf(option)

  options.value[index] = {
    label: `外观：${theme.getTheme ? '暗色主题' : '亮色主题'}`,
    key: 'theme',
    icon: renderIcon(theme.getTheme ? SunnyOutline : MoonOutline),
  }
}
const logout = () => {
  // 清空缓存
  storage.remove('token')
  router.push({ name: 'login' })
}
</script>

<template>
  <header class="flex items-center justify-between p-2 m-2 rounded-md">
    <div>
      <Breadcrump v-if="config.layout.showBreadCrump" />
    </div>

    <div class="flex items-center">
      <FullScreen />
      <n-dropdown :options="options" :on-select="onSelect">
        <div class="flex items-center px-3">
          <!-- 头像 -->
          <n-avatar class="mr-2" size="small" round :src="userInfo.avatar" />
          <!-- 用户名/注册时间 -->
          <div class="flex flex-col ml-2">
            <span class="text-sm">{{ userInfo.name }}</span>
            <span class="text-sm text-gray-500">{{ dayjs(userInfo.createdAt).format('YYYY/MM/DD') }}</span>
          </div>
        </div>
      </n-dropdown>
    </div>
  </header>
</template>

<style scoped lang="scss"></style>
