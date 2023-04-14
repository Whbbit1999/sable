import mockjs from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/upload/image',
    method: 'post',
    response: () => {
      return {
        code: 200,
        data: {
          url: mockjs.Random.image('500xx500'),
        },
        message: '上传成功',
      }
    },
  },
] as MockMethod[]
