<script lang="ts" setup>
import { toCanvas, toDataURL } from 'qrcode'
import { onMounted, ref, unref } from 'vue'

export interface IQrcodeLogo {
  src: string
  logoSize: number
  borderColor: string
  borderSize: number
  bgColor: string
  crossOrigin: string
  borderRadius: number
  logoRadius: number
}

export interface IQrcode {
  value: string
  options?: {
    margin?: number | undefined
    scale?: number | undefined
    width?: number | undefined
    color?: {
      dark?: string | undefined
      light?: string | undefined
    }
  }
  width?: number
  logo?: string
  tag?: 'canvas' | 'img'
}

const props = withDefaults(defineProps<IQrcode>(), {
  value: '',
  width: 200,
  tag: 'img',
})

const qrcode = ref(null)
onMounted(() => {
  console.log(qrcode)
  createQrcode()
})

async function createQrcode() {
  try {
    if (props.tag === 'img') {
      const url = await toDataURL(props.value, {
        errorCorrectionLevel: 'H',
        width: 200,
      })
      unref(qrcode).src = url
    } else if (props.tag === 'canvas') {
      await toCanvas(props.value, {})
    }
  } catch (error) {}
}
</script>

<template>
  <img class="" ref="qrcode" />
</template>

<style scoped lang="scss"></style>
