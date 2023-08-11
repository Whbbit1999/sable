import dayjs from 'dayjs'
import type { ImageProps, TagProps } from 'naive-ui'
import { NImage, NTag } from 'naive-ui'

export function renderImage(src, props: ImageProps = { width: 50, lazy: true }) {
  return h(NImage, { src, ...props })
}

export function renderTime(time: string, format = 'YYYY-MM-DD') {
  return h('span', null, dayjs(time).format(format))
}

export function renderTag(tag: string, props: TagProps = { type: 'success' }) {
  return h(
    NTag,
    {
      ...props,
      style: {
        marginRight: '6px',
      },
    },
    { default: () => tag },
  )
}
