<script lang="ts" setup>
import { getUserInfoApi } from "@/api/user";

const userInfo = await getUserInfoApi();
console.log(userInfo.data.name);
</script>

<template>
  <div>home.vue</div>
</template>

<style scoped lang="scss"></style>
