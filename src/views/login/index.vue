<script lang="ts" setup>
import LoginForm from './LoginForm/index.vue'
</script>

<template>
  <n-grid cols="12" item-responsive responsive="screen" x-gap="10" class="h-screen bg-gray-100">
    <n-grid-item span="0 m:4 l:8">
      <div class="flex flex-col items-center justify-center flex-1 w-full h-screen">
        <img src="../../assets/images/login-bg.jpg" class="object-cover h-full" :draggable="false" />
        <div class="absolute bottom-0 p-2 bg-white rounded-sm opacity-70">
          Photo by
          <n-button
            text
            type="primary"
            tag="a"
            href="https://unsplash.com/@oskark?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank">
            Oskar Kadaksoo
          </n-button>
          on
          <n-button
            text
            type="primary"
            tag="a"
            href="https://unsplash.com/photos/LavQxjkLIq0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank">
            Unsplash
          </n-button>
        </div>
      </div>
    </n-grid-item>
    <n-grid-item span="xs:12 s:12 m:8 l:4">
      <div class="flex items-center justify-center flex-1 w-full h-full bg-white rounded-lg">
        <LoginForm class="w-full p-4 rounded-md sm:w-3/5 sm:p-10 lg:w-full"></LoginForm>
      </div>
    </n-grid-item>
  </n-grid>
</template>

<style scoped lang="scss"></style>
