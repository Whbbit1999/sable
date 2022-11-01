import { ConfigEnv, loadEnv } from 'vite'
import alias from './vite/alias'
import { parseEnv } from './vite/utils'
import setupPlugins from './vite/plugins'

import pkg from './package.json'
import dayjs from 'dayjs'
const { name, dependencies, devDependencies, version } = pkg
const __APP_INFO__ = {
  pkg: { name, dependencies, devDependencies, version },
  lastBuildTime: dayjs().format('YYYY/MM/DD HH:mm:ss'),
}

export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command === 'build'

  const root = process.cwd()
  const env = parseEnv(loadEnv(mode, root))

  return {
    plugins: setupPlugins(isBuild, env),
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
    resolve: {
      alias: alias,
    },
    server: {
      port: '7788',
    },
  }
}
