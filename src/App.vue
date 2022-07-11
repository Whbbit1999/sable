<script setup lang="ts"></script>

<template>
  <Suspense>
    <router-view></router-view>
  </Suspense>
</template>

<style>
html,
body {
  min-height: 100vh;
}
#app {
  min-height: 100vh;
}
</style>
