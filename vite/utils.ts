// 格式化.env文件参数
import { cloneDeep } from 'lodash'

export function parseEnv(env: Record<string, any>): ViteEnv {
  const envs: any = cloneDeep(env)
  Object.entries(env).forEach(([key, value]) => {
    if (value === 'true')
      envs[key] = true
    else if (value === 'false')
      envs[key] = false
    else if (value === 'undefined')
      envs[key] = undefined
    else if (value === 'null')
      envs[key] = null
    else if (/^\d+$/.test(value))
      envs[key] = Number(value)
    else envs[key] = value
  })
  return envs
}
