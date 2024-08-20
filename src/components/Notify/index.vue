<script lang="ts" setup>
import { onClickOutside, useToggle } from '@vueuse/core'
import { getMessages, getNotifies } from '@sable/api'
import ListItem from './ListItem.vue'

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

      bg="white dark:dark"
      text="dark dark:white"

      border="1 gray/20"
      class="-translate-x-50%"
      :class="[isOpen ? 'opacity-100' : 'opacity-0']"
      absolute left-0 z-10 mt-2 max-w-xs min-w-xs rounded-sm p-2 shadow-sm duration-300
    >
      <NTabs type="line" size="small" justify-content="space-evenly">
        <NTabPane name="notifies" tab="系统通知">
          <div class="list" h-300px overflow-scroll>
            <ListItem v-for="i in notifies" :key="i" :text="i" />
          </div>
          <NButton type="primary" ghost mt-4 block outline>
            查看更多
            <i i-carbon-arrow-right ml-2 />
          </NButton>
        </NTabPane>
        <NTabPane name="messages" tab="站内消息">
          <div class="list" h-300px overflow-scroll>
            <ListItem v-for="i in messages" :key="i" :text="i" />
          </div>
          <NButton type="primary" ghost mt-4 block outline>
            查看更多
            <i i-carbon-arrow-right ml-2 />
          </NButton>
        </NTabPane>
      </NTabs>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
