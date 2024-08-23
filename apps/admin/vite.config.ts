import path from 'node:path'
import type { ConfigEnv, UserConfig } from 'vite'
import { build, setupPlugins } from '@sable/vite-config'

export default ({ command }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build'

  return {
    plugins: [...setupPlugins(isBuild)],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '#': path.resolve(__dirname, './types'),
      },
    },
    server: {
      port: 7788,
      proxy: {
        '/api': 'http://localhost:3000',
      },
    },
    build,
  }
}
