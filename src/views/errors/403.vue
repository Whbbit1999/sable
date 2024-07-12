<script lang="ts" setup>
import Icon from '@/components/Icon'
</script>

<template>
  <div h-full flex flex-col items-center justify-center p-10>
    <NResult status="403" title="403 禁止访问" description="总有些门是对你关闭的" size="huge">
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
