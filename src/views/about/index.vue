<script lang="ts" setup>
import { CashOutline } from '@vicons/ionicons5'
interface SchemaItem {
  field: string
  label: string
}

const { pkg, lastBuildTime } = __APP_INFO__
const { name, version, dependencies, devDependencies } = pkg

const schema: SchemaItem[] = []
Object.entries(dependencies).forEach(([key, value]: [string, string]) => {
  schema.push({ field: value, label: key })
})

const devSchema: SchemaItem[] = []
Object.entries(devDependencies).forEach(([key, value]: [string, string]) => {
  devSchema.push({ field: value, label: key })
})
</script>

<template>
  <main class="">
    <n-space vertical>
      <n-card title="关于">
        {{ name }} 是一个基于vue3、vite2、TypeScript的中后台解决方案，它可以帮助您快速搭建基础中后台项目。
      </n-card>
      <n-card title="项目信息">
        <n-descriptions label-placement="left" bordered :column="2">
          <n-descriptions-item label="版本">
            <n-tag type="info">{{ version }}</n-tag>
          </n-descriptions-item>

          <n-descriptions-item label="最后编译时间">
            <n-tag type="info">{{ lastBuildTime }}</n-tag>
          </n-descriptions-item>

          <n-descriptions-item label="文档地址">
            <n-button text tag="a" href="https://www.whbbit.cn/wiki/sable/index.html" target="_blank" type="info">
              文档地址
            </n-button>
          </n-descriptions-item>

          <n-descriptions-item label="预览地址">
            <n-button text tag="a" href="" target="_blank" type="info"> 预览地址 </n-button>
          </n-descriptions-item>

          <n-descriptions-item label="仓库地址">
            <n-space>
              <n-button text tag="a" href="https://github.com/Whbbit1999/sable" target="_blank" type="info">
                Github
              </n-button>
              <!-- <n-divider vertical /> -->
              <!-- <n-button text tag="a" href="" target="_blank" type="info"> Gitee </n-button> -->
            </n-space>
          </n-descriptions-item>

          <n-descriptions-item label="交流">
            <n-button text tag="a" href="https://pd.qq.com/s/3oksi7bke" target="_blank" type="info">
              交流（QQ频道）
            </n-button>
          </n-descriptions-item>
        </n-descriptions>
      </n-card>

      <n-card title="生产环境依赖">
        <n-descriptions label-placement="left" bordered>
          <n-descriptions-item v-for="item in schema" :key="item.field" :label="item.label">
            {{ item.field }}
          </n-descriptions-item>
        </n-descriptions>
      </n-card>

      <n-card title="开发环境依赖">
        <n-descriptions label-placement="left" bordered>
          <n-descriptions-item v-for="item in devSchema" :key="item.field" :label="item.label">
            {{ item.field }}
          </n-descriptions-item>
        </n-descriptions>
      </n-card>
    </n-space>
  </main>
</template>

<style scoped lang="scss"></style>
