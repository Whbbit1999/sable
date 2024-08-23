interface Response<T, D> {
  code: number
  success: boolean
  data: T
  message: string
  error: string | null
  meta: D
}

export function successResponse<T, D>(data: T, meta?: D): Response<T, D> {
  return {
    code: 200,
    success: true,
    data,
    message: 'success',
    error: null,
    meta,
  }
}
export function errorResponse(message: string, error?: any): Response<null, null> {
  return {
    code: -1,
    success: false,
    message,
    error,
    data: null,
    meta: null,
  }
}
