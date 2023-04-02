import Icon from '@/components/Icon'

import { NIcon } from 'naive-ui'
import type { Component } from 'vue'
import { h } from 'vue'

/**
 * 渲染icon - 从 naive-ui 组件库导出
 * @param icon 图标名称
 * @returns
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
