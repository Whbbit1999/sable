import path from 'node:path'
import type { AliasOptions } from 'vite'

export const alias: AliasOptions = {
  '@': path.resolve(__dirname, '../src'),
  '#': path.resolve(__dirname, '../types'),
}

export default alias
