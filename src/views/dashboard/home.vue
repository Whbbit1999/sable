<script lang="ts" setup>
import { Save } from '@vicons/ionicons5'
</script>

<template>
  <div>home.vue</div>
  <n-button>asdf</n-button>
  <n-row>
    <n-col :span="6" v-for="i in 4">
      <n-statistic label="统计数据" :value="99">
        <template #prefix>
          <n-icon>
            <Save />
          </n-icon>
        </template>
        <template #suffix> / 100 </template>
      </n-statistic>
    </n-col>
  </n-row>
</template>

<style scoped lang="scss"></style>
