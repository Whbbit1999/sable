import mock from 'mockjs'
import type { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/getUserInfo',
    method: 'get',
    response: () => {
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
  {
    url: '/api/users',
    method: 'get',
    timeout: 2000,
    response: () => {
      return {
        code: 200,
        message: '获取成功',
        data: users(),
        meta: {
          current_page: 1,
          page_size: 10,
          total: 50,
        },
      }
    },
  },
] as MockMethod[]

function users() {
  const list = Array.from({ length: 10 }).map((_, index) => {
    const tags = Array.from({ length: 3 }).map(() => mock.Random.cword())
    return {
      id: index,
      name: mock.Random.cname(),
      avatar: mock.Random.image('200x100'),
      email: mock.Random.email(),
      created_at: mock.Random.datetime(),
      updated_at: mock.Random.datetime(),
      tags,
    }
  })
  return list
}
