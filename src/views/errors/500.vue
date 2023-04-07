<script lang="ts" setup>
import Icon from '@/components/Icon'
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen p-10">
    <n-result status="500" title="500 服务器错误" description="服务器出错可能说明该雇更多程序员了" size="huge">
      <template #footer>
        <n-button @click="$router.push({ name: 'disboard.home' })">
          <Icon icon="ion:arrow-back" size="16" class="mr-2" />
          返回首页
        </n-button>
      </template>
    </n-result>
  </div>
</template>

<style scoped lang="scss"></style>
