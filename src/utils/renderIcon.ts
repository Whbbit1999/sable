import SvgIcon from '@/components/Icon/SvgIcon.vue'
import { NIcon } from 'naive-ui'
import type { Component } from 'vue'
import { h } from 'vue'
/**
 * 渲染icon
 * @param icon 图标名称
 * @returns
 */
export function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

export function renderCustomIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(SvgIcon, { icon }) })
}

/**
 * 判断是否是url
 * @param url url字符串
 * @returns 是否是url
 */
export function isUrl(url: string): boolean {
  return /^(http|https):\/\//g.test(url)
}
