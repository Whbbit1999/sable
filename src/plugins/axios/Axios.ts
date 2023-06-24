import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

class Axios {
  private instance: AxiosInstance

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors()
  }

  public request<T, D = ResponseResult<T>>(config: AxiosRequestConfig) {
    return new Promise((resolve, reject) => {
      try {
        this.instance.request<D>(config).then((response) => {
          resolve(response.data)
        })
      } catch (error) {
        reject(error)
      }
    }) as Promise<D>
  }

  public get<T>(config: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'GET' })
  }
  public post<T>(config: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'POST' })
  }
  public put<T>(config: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'PUT' })
  }
  public delete<T>(config: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'DELETE' })
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
