import presetIcons from '@unocss/preset-icons'
import presetRemToPx from '@unocss/preset-rem-to-px'
import {
  defineConfig,
  presetAttributify,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    [
      'icon-btn',
      'text-[1em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 opacity-75 text-black dark:text-white bg-gray/20 px-2 py-1 rounded-md !outline-none',
    ],
    [
      'container-color',
      'bg-bodyBgColor text-containerTextColor dark:bg-darkBodyBgColor dark:text-darkContainerTextColor',
    ],
  ],

  theme: {
    colors: {
      bodyBgColor: '#f4f4f4',
      containerTextColor: '#393a34',
      darkBodyBgColor: '#1e1e1e',
      darkContainerTextColor: '#d4cfbf',
      dark: 'rgb(24,24,28)',
      light: '#fff',
    },
  },

  presets: [
    presetUno({ dark: 'class' }),
    presetRemToPx(),
    presetAttributify(),

    // 动态引入图标
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
      // 动态引入icon
      collections: {
        carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default),
      },
      scale: 1.2,
      warn: true,
    }),
  ],
  // 可以使用括号省略前缀，https://unocss.dev/transformers/variant-group
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
