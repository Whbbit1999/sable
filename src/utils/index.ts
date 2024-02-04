import { parseEnv } from '@sable/utils'
import { renderIcon } from './renderIcon'
import { renderLink } from './renderLink'

export * from '@sable/utils'

const env = parseEnv(import.meta.env)
export { env, renderIcon, renderLink }
