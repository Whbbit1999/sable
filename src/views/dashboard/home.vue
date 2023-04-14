<script lang="ts" setup>
const cards = [
  { title: '下载次数', count: Math.floor(Math.random() * 100) },
  { title: '使用人数', count: Math.floor(Math.random() * 100) },
  { title: 'Start', count: Math.floor(Math.random() * 100) },
  { title: 'Start', count: Math.floor(Math.random() * 100) },
]
</script>

<template>
  <main>
    <n-carousel class="rounded-md" dot-type="line" show-arrow>
      <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg" />
      <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg" />
      <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg" />
      <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg" />
    </n-carousel>

    <section class="grid grid-cols-4 gap-2 mt-2">
      <n-card :title="card.title" size="medium" v-for="card in cards" :key="card.title"> {{ card.count }}</n-card>
    </section>

    <n-space>
      <n-button>Default</n-button>
      <n-button type="tertiary"> Tertiary </n-button>
      <n-button type="primary"> Primary </n-button>
      <n-button type="info"> Info </n-button>
      <n-button type="success"> Success </n-button>
      <n-button type="warning"> Warning </n-button>
      <n-button type="error"> Error </n-button>
    </n-space>
  </main>
</template>

<style scoped lang="scss">
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>
