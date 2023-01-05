import { MockMethod } from 'vite-plugin-mock'
import mock from 'mockjs'
export default [
  {
    url: '/api/getUserInfo',
    method: 'get',
    response: ({}) => {
      return {
        code: 200,
        data: {
          name: 'sable',
          password: '123456',
        },
        message: 'success',
      }
    },
  },
  {
    url: '/api/login',
    method: 'post',
    timeout: 2000,
    response: {
      code: 200,
      message: '登录成功',
      data: {
        token: mock.Random.word(15),
      },
    },
  },
] as MockMethod[]
