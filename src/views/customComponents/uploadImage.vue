<script lang="ts" setup>
import UploadSingleImage from '@/components/Custom/UploadSingleImage.vue'

const image = ref('')
</script>

<template>
  <main>
    <UploadSingleImage v-model="image" />

    <img :src="image" alt="">
  </main>
</template>

<style scoped lang="scss"></style>
