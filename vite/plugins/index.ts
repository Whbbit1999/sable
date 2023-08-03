import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import Unocss from 'unocss/vite'
import vueDevtools from 'vite-plugin-vue-devtools'
import autoImport from './autoImport'
import setupMockPlugin from './mock'

export default function setupPlugins(isBuild: boolean, env: ViteEnv) {
  return [vue(), Unocss(), autoImport(), setupMockPlugin(isBuild), visualizer() as any, vueDevtools()]
}
