// uno.config.ts
import { defineConfig, presetUno } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  // ...UnoCSS options
  presets: [presetUno(), presetRemToPx()],
})
