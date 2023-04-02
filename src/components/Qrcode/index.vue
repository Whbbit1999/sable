<script lang="ts" setup>
import { QRCodeRenderersOptions, toCanvas, toDataURL } from 'qrcode'
import { onMounted, ref } from 'vue'

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

  width?: number
  logo?: string
  tag?: 'canvas' | 'img'
  margin?: number
  frontColor?: string
  bgColor?: string
  errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H'
}

const props = withDefaults(defineProps<IQrcode>(), {
  value: '',
  width: 200,
  tag: 'canvas',
  frontColor: '#000',
  bgColor: '#fff',
  margin: 3,
  errorCorrectionLevel: 'H',
})

const qrcode = ref<HTMLImageElement | HTMLCanvasElement>(null)

onMounted(() => {
  createQrcode()
})

async function createQrcode() {
  try {
    if (props.tag === 'img') {
      await renderImg()
    } else if (props.tag === 'canvas') {
      await renderCanvas()
    }
  } catch (error) {
    // useMessage().error(error)
  }
}

const qrcodeOptions: QRCodeRenderersOptions = {
  errorCorrectionLevel: props.errorCorrectionLevel,
  width: props.width,
  margin: props.margin,
  color: {
    dark: props.frontColor,
    light: props.bgColor,
  },
}

async function renderCanvas() {
  await toCanvas(qrcode.value, props.value, qrcodeOptions)
  await drawLogo()
}

// 绘制logo图标
async function drawLogo() {
  if (!props.logo) {
    return new Promise((resolve) => resolve(true))
  }

  const canvasWidth = (qrcode.value as HTMLCanvasElement).width
}

async function renderImg() {
  const url = await toDataURL(props.value, qrcodeOptions)
  ;(qrcode.value as HTMLImageElement).src = url
}
</script>

<template>
  <component :is="tag" ref="qrcode" />
</template>

<style scoped lang="scss"></style>
