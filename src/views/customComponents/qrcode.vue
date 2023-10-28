<script lang="ts" setup>
import Qrcode from '@/components/Qrcode/index.vue'
</script>

<template>
  <main>
    <NAlert type="info" class="mb-3" :show-icon="false">
      默认渲染为canvas
    </NAlert>

    <div class="grid lg:grid-cols-3 grid-cols-1 gap-3">
      <NCard title="默认使用">
        <Qrcode value="https://www.whbbit.cn" />
      </NCard>

      <NCard title="渲染为img">
        <Qrcode value="https://www.whbbit.cn" tag="img" />
      </NCard>

      <NCard title="配置样式">
        <Qrcode value="https://www.whbbit.cn" front-color="#fff" bg-color="#000" />
      </NCard>

      <NCard title="大小">
        <Qrcode value="https://www.whbbit.cn" :width="300" />
      </NCard>
    </div>
  </main>
</template>

<style scoped lang="scss"></style>
