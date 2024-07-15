import type { ButtonProps, DataTableColumn, ImageProps, TagProps } from 'naive-ui'
import { CashOutline } from '@vicons/ionicons5'
import { renderCustomIcon, renderIcon, renderImage, renderTag, renderTime } from '@/utils'

export type RenderColumnType = {
  key: string
  title: string
  width: number
  type?: 'image' | 'date' | 'tags'
  tagsProps?: TagProps
  imageProps?: ImageProps
} & DataTableColumn

// 需要操作栏时，传递此参数
export interface TableButton {
  title: string
  command: string
  props: {
    [key in keyof ButtonProps]: ButtonProps[key]
  }
}

export const pageSizes = [
  { label: '10 每页', value: 10 },
  { label: '20 每页', value: 20 },
  { label: '30 每页', value: 30 },
  { label: '40 每页', value: 40 },
]

export const UserTableField = makeColumn([
  { key: 'id', title: 'ID', width: 50, search: false },
  { key: 'name', title: '昵称', width: 100 },
  { key: 'avatar', title: '头像', type: 'image', width: 100, search: false },
  { key: 'email', title: '邮箱' },
  { key: 'tags', title: '标签', type: 'tags' },
  { key: 'created_at', title: '创建时间', type: 'date', width: 140, searchType: 'date' },
  { key: 'updated_at', title: '更新时间', type: 'date', width: 140, searchType: 'date' },
] as RenderColumnType[])

export const UserTableButton: TableButton[] = [
  { title: '编辑', command: 'edit', props: {
    type: 'primary',
    quaternary: true,
    renderIcon: renderCustomIcon('carbon:edit'),
  } },
  { title: '', command: 'disabled', props: {
    type: 'warning',
    circle: true,
    quaternary: false,
    renderIcon: renderIcon(CashOutline),
  } },
  { title: '删除', command: 'delete', props: {
    type: 'error',
    quaternary: true,
  } },
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

    if (item?.type === 'image') {
      return {
        ...item,
        render(row: RenderColumnType) {
          return renderImage(row[item.key], row?.imageProps && row.imageProps)
        },
      }
    }

    if (item?.type === 'tags') {
      return {
        ...item,
        render(row: RenderColumnType) {
          if (Array.isArray(row[item.key]))
            return row[item.key].map((tag: string) => renderTag(tag, row?.tagsProps && row.tagsProps))
          else
            return renderTag(row[item.key], row.tagsProps && row.tagsProps)
        },
      }
    }

    return item
  })
}
