import mock from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
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
          avatar: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
          createdAt: new Date(),
          permissions: ['admin', 'editor'],
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
