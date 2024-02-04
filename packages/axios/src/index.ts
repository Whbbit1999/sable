import axios from 'axios'
import axiosRetry from 'axios-retry'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { IAxiosRetryConfig } from 'axios-retry'
import type { ResponseResult } from './type'

class Axios {
  private instance: AxiosInstance
  constructor(
    config: AxiosRequestConfig,
    axiosRetryConfig: IAxiosRetryConfig = { retries: 3, retryDelay: () => 500 },
  ) {
    this.instance = axios.create(config)
    this.setupAxiosRetry(axiosRetryConfig)
    this.interceptors()
  }

  private setupAxiosRetry(axiosRetryConfig: IAxiosRetryConfig) {
    axiosRetry(this.instance, axiosRetryConfig)
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
    return this.request({ ...config, method: 'GET' }) as Promise<D>
  }

  public post<T, D = ResponseResult<T>>(config: AxiosRequestConfig) {
    return this.request({ ...config, method: 'POST' }) as Promise<D>
  }

  public delete<T, D = ResponseResult<T>>(config: AxiosRequestConfig) {
    return this.request({ ...config, method: 'DELETE' }) as Promise<D>
  }

  public patch<T, D = ResponseResult<T>>(config: AxiosRequestConfig) {
    return this.request({ ...config, method: 'PATCH' }) as Promise<D>
  }

  public put<T, D = ResponseResult<T>>(config: AxiosRequestConfig) {
    return this.request({ ...config, method: 'PUT' }) as Promise<D>
  }
}

export default Axios
