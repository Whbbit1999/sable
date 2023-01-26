interface ResponseResult<T> {
  code: number
  message: string
  type: 'success' | 'error'
  data: T
}

/**
 * 所有的api model 都在这里定义后全局可以不用引入直接使用
 */
interface IUserModel {
  name: string
  password: string
  avatar: string
  createdAt: string
  permissions: string[]
}
