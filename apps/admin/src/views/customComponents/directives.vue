<script lang="ts" setup>
import { storeToRefs } from 'pinia'

const userPermissionStore = usePermissionStore()
const { setPermissions } = userPermissionStore
const { permissions } = storeToRefs(userPermissionStore)
</script>

<template>
  <div>
    自定义指令

    <n-divider title-placement="left">
      根据权限列表来展示
    </n-divider>
    <div>
      <n-space>
        <n-button @click="setPermissions(['read'])">
          设置为只有阅读权限
        </n-button>
        <n-button @click="setPermissions(['read', 'write'])">
          设置为阅读和修改权限
        </n-button>
      </n-space>
    </div>
    <div mt-4>
      权限列表： {{ permissions }}
      <n-button v-permission="'read'">
        阅读
      </n-button>
      <n-button v-permission="'write'">
        写入
      </n-button>
    </div>
  </div>
</template>

<style>

</style>
