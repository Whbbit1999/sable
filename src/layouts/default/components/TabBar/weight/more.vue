<script lang="ts" setup>
const options = [
  {
    label: '用户资料',
    key: 'profile',
    // icon: renderIcon(),
  },
  {
    label: '编辑用户资料',
    key: 'editProfile',
    // icon: renderIcon(EditIcon),
  },
  {
    label: '退出登录',
    key: 'logout',
    // icon: renderIcon(LogoutIcon),
  },
]
</script>

<template>
  <div>
    <n-dropdown :options="options">
      <div i-carbon-down-to-bottom icon-btn />
    </n-dropdown>
  </div>
</template>

<style>

</style>
