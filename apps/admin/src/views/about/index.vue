<script lang="ts" setup>
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
    <NSpace vertical>
      <NCard title="关于">
        {{ name }} 是一个基于vue3、vite、TypeScript的中后台解决方案，它可以帮助您快速搭建基础中后台项目。
      </NCard>
      <NCard title="项目信息">
        <NDescriptions label-placement="left" bordered :column="2">
          <NDescriptionsItem label="版本">
            <NTag type="info">
              {{ version }}
            </NTag>
          </NDescriptionsItem>

          <NDescriptionsItem label="最后编译时间">
            <NTag type="info">
              {{ lastBuildTime }}
            </NTag>
          </NDescriptionsItem>

          <NDescriptionsItem label="文档地址">
            <NButton text tag="a" href="https://www.whbbit.cn/wiki/sable/index.html" target="_blank" type="info">
              文档地址
            </NButton>
          </NDescriptionsItem>

          <NDescriptionsItem label="预览地址">
            <NButton text tag="a" href="" target="_blank" type="info">
              预览地址
            </NButton>
          </NDescriptionsItem>

          <NDescriptionsItem label="仓库地址">
            <NSpace>
              <NButton text tag="a" href="https://github.com/Whbbit1999/sable" target="_blank" type="info">
                Github
              </NButton>
              <!-- <n-divider vertical /> -->
              <!-- <n-button text tag="a" href="" target="_blank" type="info"> Gitee </n-button> -->
            </NSpace>
          </NDescriptionsItem>

          <NDescriptionsItem label="交流">
            <NButton text tag="a" href="https://pd.qq.com/s/3oksi7bke" target="_blank" type="info">
              交流（QQ频道）
            </NButton>
          </NDescriptionsItem>
        </NDescriptions>
      </NCard>

      <NCard title="生产环境依赖">
        <NDescriptions label-placement="left" bordered>
          <NDescriptionsItem v-for="item in schema" :key="item.field" :label="item.label">
            {{ item.field }}
          </NDescriptionsItem>
        </NDescriptions>
      </NCard>

      <NCard title="开发环境依赖">
        <NDescriptions label-placement="left" bordered>
          <NDescriptionsItem v-for="item in devSchema" :key="item.field" :label="item.label">
            {{ item.field }}
          </NDescriptionsItem>
        </NDescriptions>
      </NCard>
    </NSpace>
  </main>
</template>

<style scoped lang="scss"></style>
