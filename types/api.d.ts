// T: type | type[]
// meta: {} | null
interface ResponseResult<T> {
  code: number
  message: string
  type: 'success' | 'error'
  data: T
  meta: {
    current_page: number // 当前页
    page_size: number //
    total: number // 总页数
  }
}

/**
 * 所有的api model 都在这里定义后全局可以不用引入直接使用
 */

interface ILoginForm {
  username: string
  password: string
}
interface ILoginModel {
  token: string
}

interface IUserModel {
  name: string
  password: string
  avatar: string
  createdAt: string
  permissions: string[]
}

interface IArticleModel {
  title: string
}
