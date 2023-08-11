<script lang="ts" setup>
import { onClickOutside, useToggle } from '@vueuse/core'
import ListItem from './ListItem.vue'
import { getMessages, getNotifies } from '@/api/notifyApi'

const count = ref(0)

const isOpen = ref(false)
const toggleOpen = useToggle(isOpen)

const pane = ref()
onClickOutside(pane, () => (isOpen.value = false))

const { data: notifies } = await getNotifies()
const { data: messages } = await getMessages()
</script>

<template>
  <div ref="pane" relative>
    <n-badge processing :show="count > 0" :max="15" :value="count">
      <button icon-btn @click.stop="toggleOpen()">
        <i i-carbon-notification />
      </button>
    </n-badge>

    <div
      v-if="isOpen"
      absolute
      bg="white dark:dark"
      text="dark dark:white"
      rounded-sm
      shadow-sm
      p-2
      z-10
      min-w-xs
      max-w-xs
      left-0
      border="1 gray/20"
      class="-translate-x-50%"
      mt-2
    >
      <n-tabs type="line" size="small" justify-content="space-evenly">
        <n-tab-pane name="notifies" tab="系统通知">
          <div class="list">
            <ListItem v-for="i in notifies" :key="i" :text="i" />
          </div>
          <n-button type="primary" ghost outline block mt-4>
            查看更多
            <i i-carbon-arrow-right ml-2 />
          </n-button>
        </n-tab-pane>
        <n-tab-pane name="messages" tab="站内消息">
          <div class="list">
            <ListItem v-for="i in messages" :key="i" :text="i" />
          </div>
          <n-button type="primary" ghost outline block mt-4>
            查看更多
            <i i-carbon-arrow-right ml-2 />
          </n-button>
        </n-tab-pane>
      </n-tabs>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
