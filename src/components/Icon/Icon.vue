<script lang="ts" setup>
import { isString } from '@/utils/is'
import Iconify from '@purge-icons/generated'
import { computed, CSSProperties, nextTick, onMounted, ref, unref, watch } from 'vue'
import SvgIcon from './SvgIcon.vue'

const SVG_END_WITH_FLAG = '|svg'

const props = withDefaults(
  defineProps<{
    icon: string
    color?: string
    size?: string | number
    spin?: boolean
    prefix?: string
  }>(),
  { size: 16 },
)
const elRef = ref(null)
const isSvgIcon = computed(() => props.icon?.endsWith(SVG_END_WITH_FLAG))
const getSvgIcon = computed(() => props.icon.replace(SVG_END_WITH_FLAG, ''))
const getIconRef = computed(() => `${props.prefix ? props.prefix + ':' : ''}${props.icon}`)
const update = async () => {
  if (unref(isSvgIcon)) return

  const el = unref(elRef)
  if (!el) return

  await nextTick()
  const icon = unref(getIconRef)
  if (!icon) return

  const svg = Iconify.renderSVG(icon, {})
  if (svg) {
    el.textContent = ''
    el.appendChild(svg)
  } else {
    const span = document.createElement('span')
    span.className = 'iconify'
    span.dataset.icon = icon
    el.textContent = ''
    el.appendChild(span)
  }
}
const getWrapStyle = computed((): CSSProperties => {
  const { size, color } = props
  let fs = size
  if (isString(size)) {
    fs = parseInt(size as string, 10)
  }
  return {
    fontSize: `${fs}px`,
    color: color,
    display: 'inline-flex',
  }
})

watch(() => props.icon, update, { flush: 'post' })
onMounted(update)
</script>

<template>
  <SvgIcon
    :size="size"
    :name="getSvgIcon"
    v-if="isSvgIcon"
    :class="[$attrs.class, 'app-iconify anticon', spin && 'app-iconify-spin']"
    :spin="spin" />

  <span
    v-else
    ref="elRef"
    :style="getWrapStyle"
    :class="[$attrs.class, 'app-iconify anticon', spin && 'app-iconify-spin']"></span>
</template>

<style lang="scss">
.app-iconify {
  display: inline-block;
  // vertical-align: middle;
  &-spin {
    svg {
      animation: loadingCircle 1s infinite linear;
    }
  }
}
span.iconify {
  display: block;
  min-width: 1em;
  min-height: 1em;
  /* background-color: @iconify-bg-color; */
  border-radius: 100%;
}
</style>
