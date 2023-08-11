<script lang="ts" setup>
import dayjs from 'dayjs'

const user = userStore()
const userInfo = await user.getUserInfo()
</script>

<template>
  <main>
    <div class="flex gap-2">
      <n-card>
        <template #cover>
          <img :src="userInfo.avatar">
        </template>
        <h2 class="text-3xl">
          {{ userInfo.name }}
        </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, illum est atque eligendi quibusdam expedita
          quod maxime modi nam, numquam magnam vel, natus facere dolorum. Deserunt incidunt vero corrupti labore?
        </p>
        <p class="text-gray-600">
          <span>注册于：</span><span>{{ dayjs(userInfo.createdAt).fromNow() }}</span>
        </p>
      </n-card>

      <div class="flex-1">
        <h2>网站设置</h2>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.n-card {
  max-width: 300px;
}
</style>
