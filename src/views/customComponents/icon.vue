<script lang="ts" setup>
import Icon from '@/components/Icon'
</script>

<template>
  <div>
    <n-alert title="使用本地svg图标" type="info">
      将图标导入 /src/assets/svg 进行使用，名称为 `icon-custom-[svg名称]`</n-alert
    >

    <n-icon class="text-7xl">
      <icon-custom-axios />
      <icon-custom-ts />
    </n-icon>
    <n-alert title="使用icones查找图标" type="info">
      可以去
      <n-button text tag="a" href="https://icones.js.org/" target="_blank" type="primary"> icones </n-button>
      查看海量图标并直接复制类名进行使用
    </n-alert>
    <Icon icon="logos:axios" />
    <Icon icon="logos:vitejs" />
  </div>
</template>

<style scoped lang="scss"></style>
