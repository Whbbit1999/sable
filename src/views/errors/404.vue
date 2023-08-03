<script lang="ts" setup>
import Icon from '@/components/Icon'
</script>

<template>
  <div flex flex-col items-center justify-center h-screen p-10>
    <n-result status="404" title="404 资源不存在" description="生活总归带点荒谬" size="huge">
      <template #footer>
        <n-button @click="$router.push({ name: 'dashboard.home' })">
          <Icon icon="ion:arrow-back" size="16" class="mr-2" />
          返回首页
        </n-button>
      </template>
    </n-result>
  </div>
</template>

<style scoped lang="scss"></style>
