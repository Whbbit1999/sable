import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export default function autoImport(isBuild: boolean, env: ViteEnv) {
  return Components({
    // auto import components 自动加载组件
    resolvers: [NaiveUiResolver()],
  })
}
