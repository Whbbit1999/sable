import path from 'node:path'
import type { AliasOptions } from 'vite'

const alias = {
  '@': path.resolve(__dirname, '../src'),
  '#': path.resolve(__dirname, '../types'),
} as AliasOptions

export default alias
