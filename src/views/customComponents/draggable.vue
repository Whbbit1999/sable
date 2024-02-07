<script lang="ts" setup>
import { AirplaneOutline } from '@vicons/ionicons5'
import { VueDraggable } from 'vue-draggable-plus'

const myArray = ref([
  { id: 1, name: 1 },
  { id: 2, name: 2 },
  { id: 3, name: 3 },
  { id: 4, name: 4 },
  { id: 5, name: 5 },
  { id: 6, name: 6 },
])
</script>

<template>
  <div>
    <NAlert title="文档详见" class="mb-3">
      <template #icon>
        <NIcon>
          <AirplaneOutline />
        </NIcon>
      </template>
      <NButton quaternary type="primary">
        <a href="https://alfred-skyblue.github.io/vue-draggable-plus/" target="_blank" rel="noopener noreferrer">vue-draggable-plus</a>
      </NButton>
    </NAlert>

    拖拽示例：
    <VueDraggable v-model="myArray" ghost-class="ghost" :animation="150" class="grid grid-cols-3 gap-3">
      <div
        v-for="item in myArray" :key="item.id"
        bg="gray-500/5" rounded-md overflow-hidden p="x-5 y-2" cursor-move
      >
        {{ item.name }}
      </div>
    </VueDraggable>
  </div>
</template>

<style scoped lang="scss"></style>
