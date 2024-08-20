export interface ResponseResult<T> {
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
