<script lang="ts" setup>
import Qrcode from '@/components/Qrcode/index.vue'
</script>

<template>
  <main>
    <n-alert type="info" class="mb-3" :show-icon="false"> 默认渲染为canvas </n-alert>

    <div class="grid grid-cols-4 gap-3">
      <n-card title="默认使用">
        <Qrcode value="https://www.whbbit.cn" />
      </n-card>

      <n-card title="渲染为img">
        <Qrcode value="https://www.whbbit.cn" tag="img" />
      </n-card>

      <n-card title="配置样式">
        <Qrcode value="https://www.whbbit.cn" front-color="#fff" bg-color="#000" />
      </n-card>

      <!-- <n-card title="logo">
      <Qrcode value="https://www.whbbit.cn" logo="" />
    </n-card> -->

      <n-card title="大小">
        <Qrcode value="https://www.whbbit.cn" :width="300" />
      </n-card>

      <!-- <n-card title="下载">
      <Qrcode value="https://www.whbbit.cn" />
    </n-card> -->
    </div>
  </main>
</template>

<style scoped lang="scss"></style>
