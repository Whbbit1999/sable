import { AliasOptions } from 'vite'
import path from 'path'
const alias = {
  '@': path.resolve(__dirname, '../src'),
  '#': path.resolve(__dirname, '../types'),
} as AliasOptions

export default alias
