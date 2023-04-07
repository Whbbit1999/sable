import { h } from 'vue'
import { NImage, NTag, TagProps, ImageProps } from 'naive-ui'
import dayjs from 'dayjs'

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
