<script lang="ts" setup>
import Qrcode from '@/components/Qrcode/index.vue'
</script>

<template>
  <div class="grid grid-cols-4 gap-3">
    <n-card title="默认使用">
      <Qrcode value="https://www.whbbit.cn" />
    </n-card>

    <n-card title="渲染为canvas">
      <Qrcode value="https://www.whbbit.cn" />
    </n-card>

    <n-card title="配置样式">
      <Qrcode value="https://www.whbbit.cn" />
    </n-card>

    <n-card title="logo">
      <Qrcode value="https://www.whbbit.cn" />
    </n-card>

    <n-card title="大小">
      <Qrcode value="https://www.whbbit.cn" />
    </n-card>

    <n-card title="下载">
      <Qrcode value="https://www.whbbit.cn" />
    </n-card>
  </div>
</template>

<style scoped lang="scss"></style>
