import axios from 'axios'
import axiosRetry from 'axios-retry'
import { stringify as qsStringify } from 'qs'

import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { IAxiosRetryConfig } from 'axios-retry'
import type { ErrorMessageMode, ResponseResult } from './type'

interface CustomConfig {
  axiosRetryConfig?: IAxiosRetryConfig
  authorizationPrefix?: string
  tokenKey?: string
}

const defaultConfig: CustomConfig = {
  axiosRetryConfig: { retries: 3, retryDelay: () => 500 },
  authorizationPrefix: 'Bearer',
  tokenKey: 'token',
}

class Axios {
  private instance: AxiosInstance
  constructor(
    config: AxiosRequestConfig,
    public customConfig: CustomConfig = defaultConfig,
  ) {
    this.instance = axios.create(config)
    this.setupAxiosRetry(this.customConfig?.axiosRetryConfig || defaultConfig.axiosRetryConfig)
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
        config.headers.Authorization = this.getToken()

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

  private getToken() {
    const { authorizationPrefix, tokenKey } = this.customConfig

    const token = localStorage.getItem(tokenKey)
    return token ? `${authorizationPrefix} ${token}` : ''
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
    if (config.params)
      config.params = { params: qsStringify(config.params) }

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
