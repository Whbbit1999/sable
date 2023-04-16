import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    coverage: {
      provider: 'c8',
    },

    transformMode: {
      web: [/.[jt]sx$/],
    },

    // reporters: ['html'],
  },
})
