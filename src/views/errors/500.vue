<script lang="ts" setup>
import Icon from '@/components/Icon'
</script>

<template>
  <div class="h-full flex flex-col items-center justify-center p-10">
    <NResult status="500" title="500 服务器错误" description="服务器出错可能说明该雇更多程序员了" size="huge">
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
