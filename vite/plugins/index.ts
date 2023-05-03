import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import autoImport from './autoImport'
import setupMockPlugin from './mock'
import Unocss from 'unocss/vite'

export default function setupPlugins(isBuild: boolean, env: ViteEnv) {
  return [vue(), Unocss(), autoImport(isBuild, env), setupMockPlugin(isBuild), visualizer() as any]
}
