<script lang="ts" setup>
import FullScreen from '@/components/Custom/FullScreen.vue'
import { useTheme } from '@/store/useTheme'
import { renderIcon, storage } from '@/utils'
import {
  LogOutOutline as LogoutIcon,
  MoonOutline,
  PersonCircleOutline as UserIcon,
  SunnyOutline,
} from '@vicons/ionicons5'
import dayjs from 'dayjs'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const theme = useTheme()
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
const username = 'whbbit'

const onSelect = (key, option) => {
  switch (key) {
    case 'theme':
      handleChangeTheme(key, option)
      break
    case 'userspace':
      ''
      break
    case 'logout':
      logout()
      break
  }
}
const handleChangeTheme = (key, option) => {
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
    Sable Admin
    <div class="flex items-center">
      <FullScreen />
      <n-dropdown :options="options" :on-select="onSelect">
        <div class="flex items-center px-3">
          <!-- 头像 -->
          <n-avatar class="mr-2" size="small" round src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
          <!-- 用户名/注册时间 -->
          <div class="flex flex-col ml-2">
            <span class="text-sm">{{ username }}</span>
            <span class="text-sm text-gray-500">{{ dayjs(new Date()).format('YYYY-MM-DD') }}</span>
          </div>
        </div>
      </n-dropdown>
    </div>
  </header>
</template>

<style scoped lang="scss"></style>
