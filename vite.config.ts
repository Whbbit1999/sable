import dayjs from 'dayjs'
import type { ConfigEnv } from 'vite'
import pkg from './package.json'
import alias from './vite-config/alias'
import setupPlugins from './vite-config/plugins'
import { build } from './vite-config/build'

const { name, dependencies, devDependencies, version } = pkg
const __APP_INFO__ = {
  pkg: { name, dependencies, devDependencies, version },
  lastBuildTime: dayjs().format('YYYY/MM/DD HH:mm:ss'),
}

export default ({ command }: ConfigEnv) => {
  const isBuild = command === 'build'

  return {
    plugins: setupPlugins(isBuild),
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
    resolve: {
      alias,
    },
    server: {
      port: '7788',
    },

    esbuild: {
      pure: ['console.log'],
      minify: 'terser',
    },
    build,
  }
}
