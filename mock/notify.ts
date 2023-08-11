import mock from 'mockjs'
import type { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/notify',
    method: 'post',
    timeout: 1000,
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: notifies(),
        meta: {
          current_page: 1,
          page_size: 10,
          total: 50,
        },
      }
    },
  },
  {
    url: '/api/messages',
    method: 'post',
    timeout: 1000,
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: notifies(),
        meta: {
          current_page: 1,
          page_size: 10,
          total: 50,
        },
      }
    },
  },
] as MockMethod[]

function notifies() {
  const list = Array.from({ length: 10 }).map(() => mock.Random.ctitle())
  return list
}
