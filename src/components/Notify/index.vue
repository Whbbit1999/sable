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
    <NBadge processing :show="count > 0" :max="15" :value="count">
      <button icon-btn @click.stop="toggleOpen()">
        <i i-carbon-notification />
      </button>
    </NBadge>

    <div
      v-if="isOpen"
      absolute left-0 z-10
      bg="white dark:dark"
      text="dark dark:white"
      rounded-sm
      shadow-sm
      p-2 mt-2
      min-w-xs max-w-xs
      border="1 gray/20"
      class="-translate-x-50%"
      :class="[isOpen ? 'opacity-100' : 'opacity-0']"
      duration-300
    >
      <NTabs type="line" size="small" justify-content="space-evenly">
        <NTabPane name="notifies" tab="系统通知">
          <div class="list" h-300px overflow-scroll>
            <ListItem v-for="i in notifies" :key="i" :text="i" />
          </div>
          <NButton type="primary" ghost outline block mt-4>
            查看更多
            <i i-carbon-arrow-right ml-2 />
          </NButton>
        </NTabPane>
        <NTabPane name="messages" tab="站内消息">
          <div class="list" h-300px overflow-scroll>
            <ListItem v-for="i in messages" :key="i" :text="i" />
          </div>
          <NButton type="primary" ghost outline block mt-4>
            查看更多
            <i i-carbon-arrow-right ml-2 />
          </NButton>
        </NTabPane>
      </NTabs>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
