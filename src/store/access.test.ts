import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useAccessStore } from './access'

describe('useAccessStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('set access codes', () => {
    const store = useAccessStore()
    expect(store.accessCodes).toEqual([])

    store.setAccessCodes(['a', 'b'])
    expect(store.accessCodes).toEqual(['a', 'b'])
  })
  it('set access menus', () => {
    const store = useAccessStore()
    expect(store.accessMenus).toEqual([])

    store.setAccessMenus(['a', 'b'])
    expect(store.accessMenus).toEqual(['a', 'b'])
  })

  it('set access routes', () => {
    const store = useAccessStore()
    expect(store.accessRoutes).toEqual([])

    store.setAccessRoutes(['a', 'b'])
    expect(store.accessRoutes).toEqual(['a', 'b'])
  })

  it('set access token', () => {
    const store = useAccessStore()
    expect(store.accessToken).toBeNull()

    store.setAccessToken('test token')
    expect(store.accessToken).toBe('test token')
  })

  it('set access loginExpired', () => {
    const store = useAccessStore()
    expect(store.loginExpired).toBeFalsy()

    store.setLoginExpired(true)
    expect(store.loginExpired).toBeTruthy()

    store.setLoginExpired(false)
    expect(store.loginExpired).toBeFalsy()
  })

  it('set access refreshToken', () => {
    const store = useAccessStore()
    expect(store.refreshToken).toBeNull()

    store.setRefreshToken('test token')
    expect(store.refreshToken).toBe('test token')
  })
})
