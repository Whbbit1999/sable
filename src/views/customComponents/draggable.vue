<script lang="ts" setup>
import { AirplaneOutline } from '@vicons/ionicons5'
import Draggable from 'vuedraggable'

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
        <a href="https://github.com/SortableJS/vue.draggable.next" target="_blank" rel="noopener noreferrer">vue.draggable.next</a>
      </NButton>
    </NAlert>

    拖拽示例：
    <Draggable v-model="myArray" item-key="id" class="grid grid-cols-3 gap-3">
      <template #item="{ element }">
        <div class="bg-white dark:bg-black flex items-center justify-center p-3 border cursor-pointer">
          {{ element.name }}
        </div>
      </template>
    </Draggable>
  </div>
</template>

<style scoped lang="scss"></style>
