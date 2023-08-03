<script lang="ts" setup>
const router = useRouter()
const route = useRoute()
</script>

<template>
  <div icon-btn @click="router.push({ name: route.name })">
    <i i-carbon-rotate-360 />
  </div>
</template>

<style scoped lang="scss"></style>
