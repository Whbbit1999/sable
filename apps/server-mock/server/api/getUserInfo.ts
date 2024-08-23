import { defineEventHandler } from 'h3'

export default defineEventHandler(async (_event) => {
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
})
