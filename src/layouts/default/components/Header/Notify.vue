<script lang="ts" setup>
const count = ref(0)
</script>

<template>
  <n-badge processing :show="count > 0" :max="15" :value="count">
    <button icon-btn>
      <i i-carbon-notification />
    </button>
  </n-badge>
</template>

<style scoped lang="scss"></style>
