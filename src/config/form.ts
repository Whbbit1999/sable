import type { FormFieldType } from '@sable/types'

export const SystemFormField = {
  site: [
    { title: '站点名称', name: 'name', type: 'input' },
    { title: '站点地址', name: 'site', type: 'textarea' },
    {
      title: '作者性别',
      name: 'sex',
      type: 'radio',
      options: [
        { label: '女', value: 0 },
        { label: '男', value: 1 },
      ],
    },
    { title: '站点图片', name: 'cover', type: 'image' },
    { title: '启用', name: 'used', type: 'switch' },
    { title: '使用人数', name: 'usedCount', type: 'inputNumber' },
    { title: '简介', name: 'content', type: 'markdown' },
    // { title: '征文', name: 'body', type: 'richEditor' },
    {
      title: '类型',
      name: 'type',
      type: 'select',
      options: [
        { label: 'Drive My Car', value: 'song1' },
        { label: 'Norwegian Wood', value: 'song2' },
      ],
    },
  ],
} as Record<string, FormFieldType[]>

export const ArticleFormField = [
  { title: '标题', name: 'title', type: 'input' },
  { title: '简介', name: 'desc', type: 'textarea' },
  { title: '正文', name: 'article', type: 'markdown' },
] as FormFieldType[]
