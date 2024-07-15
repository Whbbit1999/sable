import { resolve } from 'node:path'
import process from 'node:process'
import AutoImport from 'unplugin-auto-import/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

const customIconPath = resolve(process.cwd(), 'src/assets/svg')

export default function autoImport(): any {
  return [
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: [
        'vue',
        'vue-router',
        { 'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'] },
      ], // 自动加载 vue,vue-router api
      dirs: [
        'src/composables/**/*.ts',
        'src/enum/**/*.ts',
        'src/store/**/*.ts',
      ], // 自动加载配置里的文件
      defaultExportByFilename: true, // 包含文件夹名称，避免命名冲突
      dts: 'types/auto-import.d.ts', // 类型提示文件
    }),

    Components({
      // auto import components 自动加载组件
      resolvers: [
        NaiveUiResolver(),
        IconsResolver({ customCollections: ['custom'], componentPrefix: 'icon' }),
      ],
      dirs: ['src/components/Custom'], // 要自动引入组件的目录
      directoryAsNamespace: true, // 包含文件夹名称，避免命名冲突
      dts: 'types/auto-import-components.d.ts', // 类型提示文件
    }),

    Icons({
      compiler: 'vue3',
      customCollections: { custom: FileSystemIconLoader(customIconPath) },
      scale: 1,
      defaultClass: 'inline-block',
    }),

    createSvgIconsPlugin({
      iconDirs: [customIconPath],
      symbolId: 'icon-[dir]-[name]',
      inject: 'body-last',
      customDomId: '__CUSTOM_SVG_ICON__',
    }),
  ]
}
