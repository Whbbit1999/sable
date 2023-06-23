import presetRemToPx from '@unocss/preset-rem-to-px'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import { presetAttributify, presetUno } from 'unocss'
import Unocss from 'unocss/vite'
import autoImport from './autoImport'
import setupMockPlugin from './mock'

export default function setupPlugins(isBuild: boolean, env: ViteEnv) {
  return [
    vue(),
    Unocss({
      content: {
        filesystem: ['**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}'],
      },
      presets: [presetUno(), presetRemToPx(), presetAttributify()],
    }),
    autoImport(),
    setupMockPlugin(isBuild),
    visualizer() as any,
  ]
}
