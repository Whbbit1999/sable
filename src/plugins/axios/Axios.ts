import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import axios from 'axios'

class Axios {
  private instance: AxiosInstance

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors()
  }

  public request<T, D = ResponseResult<T>>(config: AxiosRequestConfig) {
    return new Promise((resolve, reject) => {
      try {
        this.instance.request<D>(config).then(response => resolve(response.data))
      }
      catch (error) {
        reject(error)
      }
    })
  }

  public get<T, D = ResponseResult<T>>(config: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'GET' }) as Promise<D>
  }

  public post<T, D = ResponseResult<T>>(config: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'POST' }) as Promise<D>
  }

  public put<T, D = ResponseResult<T>>(config: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'PUT' }) as Promise<D>
  }

  public delete<T, D = ResponseResult<T>>(config: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'DELETE' }) as Promise<D>
  }

  private interceptors() {
    this.interceptorsRequest()
    this.interceptorsResponse()
  }

  // 请求拦截
  private interceptorsRequest() {
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },

      (error) => {
        return Promise.reject(error)
      },
    )
  }

  // 响应拦截
  private interceptorsResponse() {
    this.instance.interceptors.response.use(
      (response) => {
        return response
      },

      (error) => {
        return Promise.reject(error)
      },
    )
  }
}
export default Axios
