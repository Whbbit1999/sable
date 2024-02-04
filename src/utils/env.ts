import { cloneDeep } from 'lodash-es'

const envs: any = cloneDeep(import.meta.env)

Object.entries(envs as Record<string, any>).forEach(([key, value]) => {
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

export default envs as ViteEnv
