import dayjs from 'dayjs'
import { NIcon, NImage, NTag } from 'naive-ui'
import type { ImageProps, TagProps } from 'naive-ui'
import type { Component } from 'vue'
import { RouterLink } from 'vue-router'
import { Icon } from '@sable/components'
import { h } from 'vue'

export function renderImage(src, props: ImageProps = { width: 50, lazy: true }) {
  return h(NImage, { src, ...props })
}

export function renderTime(time: string, format = 'YYYY-MM-DD', showIcon: boolean = true, icon: string = 'carbon:calendar') {
  return h('span', {
    style: { display: 'inline-flex', alignItems: 'center', gap: '4px' },
  }, [
    showIcon && renderCustomIcon(icon)(),
    dayjs(time).format(format),
  ])
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

/**
 * 渲染icon - 从 naive-ui 组件库导出
 * @param icon 图标名称
 * @returns component
 */
export function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

/**
 * 渲染自定义Icon - icones icon
 * @param icon icon类名
 * @param size 图标大小
 * @returns IconComponent
 */
export function renderCustomIcon(icon: string, size: number | string = 16) {
  return () => h(Icon, { icon, size })
}

export function renderLink(routerName: string, routerTitle: string) {
  return () =>
    h(
      RouterLink,
      {
        to: {
          name: routerName,
        },
      },
      { default: () => routerTitle },
    )
}
