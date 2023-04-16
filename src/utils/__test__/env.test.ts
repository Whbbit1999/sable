import { test, expect } from 'vitest'
import envs from '../env'

test('env', () => {
  expect(envs.VITE_ROUTE_AUTOLOAD).toBeTypeOf('boolean')
  expect(envs.VITE_BASE_URL).toBeTypeOf('string')
})
