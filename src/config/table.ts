import type { ImageProps, TagProps } from 'naive-ui'
import { renderImage, renderTag, renderTime } from '@/utils/render'

export interface RenderColumnType {
  key: string
  title: string
  width: number
  type?: 'image' | 'date' | 'tags'
  tagsProps?: TagProps
  imageProps?: ImageProps
}

// 需要操作栏时，传递此参数
export interface TableButton {
  title: string
  command: string
  type: 'default' | 'tertiary' | 'primary' | 'info' | 'success' | 'warning' | 'error'
}

export const pageSizes = [
  { label: '10 每页', value: 10 },
  { label: '20 每页', value: 20 },
  { label: '30 每页', value: 30 },
  { label: '40 每页', value: 40 },
]

export const UserTableField = makeColumn([
  { key: 'id', title: 'ID', width: 50 },
  { key: 'name', title: '昵称', width: 100 },
  { key: 'avatar', title: '头像', type: 'image', width: 100 },
  { key: 'email', title: '邮箱' },
  { key: 'tags', title: '标签', type: 'tags' },
  { key: 'created_at', title: '创建时间', type: 'date' },
  { key: 'updated_at', title: '更新时间', type: 'date' },
] as RenderColumnType[])

export const UserTableButton: TableButton[] = [
  { title: '编辑', type: 'primary', command: 'edit' },
  { title: '删除', type: 'error', command: 'delete' },
]

function makeColumn(column: RenderColumnType[]) {
  return column.map((item) => {
    if (item?.type === 'date') {
      return {
        ...item,
        render(row) {
          return renderTime(row[item.key])
        },
      }
    }
    else if (item?.type === 'image') {
      return {
        ...item,
        render(row: RenderColumnType) {
          return renderImage(row[item.key], row?.imageProps && row.imageProps)
        },
      }
    }
    else if (item?.type === 'tags') {
      return {
        ...item,
        render(row: RenderColumnType) {
          return row[item.key].map((tag: string) => renderTag(tag, row?.tagsProps && row.tagsProps))
        },
      }
    }
    else {
      return item
    }
  })
}
