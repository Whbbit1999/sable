import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import autoImport from './autoImport'
import setupMockPlugin from './mock'

export default function setupPlugins(isBuild: boolean, env: ViteEnv) {
  return [vue(), autoImport(isBuild, env), setupMockPlugin(isBuild), visualizer() as any]
}
