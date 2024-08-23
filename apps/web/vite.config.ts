import path from 'node:path'
import type { ConfigEnv, UserConfig } from 'vite'
import { build, setupPlugins } from '@sable/vite-config'
import dayjs from 'dayjs'
import pkg from './package.json'

const { name, dependencies, devDependencies, version } = pkg
const __APP_INFO__ = {
  pkg: { name, dependencies, devDependencies, version },
  lastBuildTime: dayjs().format('YYYY/MM/DD HH:mm:ss'),
}

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build'

  return {
    plugins: [...setupPlugins(isBuild)],
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '#': path.resolve(__dirname, './types'),
      },
    },
    server: {
      // port: 7788,
    },

    esbuild: {
      pure: ['console.log'],
    },
    build,
  }
}
