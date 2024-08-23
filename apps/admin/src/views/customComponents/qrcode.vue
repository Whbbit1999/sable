<script lang="ts" setup>
const text = ref('雨淋湿了天空')
</script>

<template>
  <main>
    使用NutUI的QR Code组件实现二维码的生成和显示功能。

    <n-space vertical>
      <n-qr-code :value="text" />
      <n-input v-model:value="text" :maxlength="60" type="text" />
    </n-space>
  </main>
</template>

<style scoped lang="scss"></style>
