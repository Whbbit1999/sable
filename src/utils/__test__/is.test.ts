import { expect, it } from 'vitest'
import { is, isShowMenu, isString, isUrl } from '../is'

it('utils.is-isUrl', async () => {
  expect(isUrl('https://www.whbbit.cn')).toBeTruthy()
  expect(isUrl('www.whbbit.cn')).toBeTruthy()
  expect(isUrl('ssss.cn')).toBeFalsy()
})

it('utils.is-isShowMenu', () => {
  const hideRoute = {
    path: 'base',
    name: 'user.base',
    component: () => import('@/views/user/base.vue'),
    meta: { menu: { title: '个人空间', show: false } },
  }
  expect(isShowMenu(hideRoute)).toBeFalsy()

  const showRoute = {
    path: 'base',
    name: 'user.base',
    component: () => import('@/views/user/base.vue'),
    meta: { menu: { title: '个人空间' } },
  }
  expect(isShowMenu(showRoute)).toBeTruthy()
})

it('utils.is-isString', () => {
  expect(isString('wer')).toBeTruthy()
  expect(isString({ a: 'b' })).toBeFalsy()
})

it('utils.is-is', () => {
  expect(is({ a: 'b' }, 'Object')).toBeTruthy()
  expect(is([1, 2, 3], 'Array')).toBeTruthy()
  expect(
    is(() => {
    }, 'Function'),
  ).toBeTruthy()
})
