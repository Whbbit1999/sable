import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useLockStore } from './lock'

describe('useAccessStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('default', () => {
    const store = useLockStore()

    expect(store.isLockScreen).toBe(false)
    expect(store.lockScreenPassword).toBe(undefined)
  })

  it('lock', () => {
    const store = useLockStore()
    store.lockScreen('2222')

    expect(store.isLockScreen).toBe(true)
    expect(store.lockScreenPassword).toBe('2222')
  })

  it('unlock', () => {
    const store = useLockStore()
    store.lockScreen('2222')
    store.unlockScreen()

    expect(store.isLockScreen).toBe(false)
    expect(store.lockScreenPassword).toBe(undefined)
  })
})
