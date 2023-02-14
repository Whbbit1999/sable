import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

import { resolve } from 'path'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

const customIconPath = resolve(process.cwd(), 'src/assets/svg')

export default function autoImport(isBuild: boolean, env: ViteEnv) {
  return [
    Components({
      // auto import components 自动加载组件
      resolvers: [NaiveUiResolver(), IconsResolver({ customCollections: ['custom'], componentPrefix: 'icon' })],
      dts: false,
    }),
    Icons({
      compiler: 'vue3',
      customCollections: {
        custom: FileSystemIconLoader(customIconPath),
      },
      scale: 1,
      defaultClass: 'inline-block',
    }),
    createSvgIconsPlugin({
      iconDirs: [customIconPath],
      symbolId: 'icon-custom-[dir]-[name]',
      inject: 'body-last',
      customDomId: '__CUSTOM_SVG_ICON__',
    }),
  ]
}
