<script lang="ts" setup>
import Icon from '@/components/Icon'
</script>

<template>
  <div class="h-full flex flex-col items-center justify-center p-10">
    <NResult title="502 服务器错误" description="服务器出错可能说明该雇更多程序员了" size="huge">
      <template #icon>
        <Icon icon="twemoji:anxious-face-with-sweat" size="125" />
      </template>
      <template #footer>
        <NButton @click="$router.push({ name: 'dashboard.home' })">
          <Icon icon="ion:arrow-back" size="16" class="mr-2" />
          返回首页
        </NButton>
      </template>
    </NResult>
  </div>
</template>

<style scoped lang="scss"></style>
