import type { BuildOptions } from 'vite'

export const build: BuildOptions = {
  emptyOutDir: true,
  rollupOptions: {
    output: {
      manualChunks: {
        'dayjs': ['dayjs'],
        'lodash-es': ['lodash-es'],
        'echarts': ['echarts'],
        // 'artplayer': ['artplayer'],
        // 'md-editor-v3': ['md-editor-v3'],
        'vue-draggable-plus': ['vue-draggable-plus'],
        'vue': ['vue', 'pinia', 'pinia-plugin-persistedstate', 'vue-router'],
        'naive-ui': ['naive-ui'],
      },
    },
  },
}
