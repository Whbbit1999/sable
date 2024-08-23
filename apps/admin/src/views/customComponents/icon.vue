<script lang="ts" setup>
import Icon from '@/components/Icon'
</script>

<template>
  <div>
    <div flex="~ col " gap-4>
      <NAlert title="使用本地svg图标" type="info">
        将图标导入 /src/assets/svg 进行使用，名称为 `icon-svg-[svg名称]`
      </NAlert>

      <div>
        <i-svg-download-count />
        <i-svg-sun />
        <i-svg-moon />
      </div>
    </div>

    <div>
      <NAlert title="使用icones查找图标" type="info">
        可以去
        <NButton text tag="a" href="https://icones.js.org/" target="_blank" type="primary">
          icones
        </NButton>
        查看海量图标并直接复制类名进行使用
      </NAlert>
      <Icon icon="logos-axios" />
      <Icon icon="logos-vitejs" />
    </div>

    <div>
      <NAlert title="下载对应图标集，使用类名直接使用" type="info">
        可以去
        <NButton text tag="a" href="https://unocss.dev/presets/icons" target="_blank" type="primary">
          unocss
        </NButton>
        查看文档
      </NAlert>
      这里使用系统集成的 carbon 图标集进行演示
      <div i-carbon-4k-filled />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
