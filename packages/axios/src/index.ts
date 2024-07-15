import axios from 'axios'
import axiosRetry from 'axios-retry'
import { stringify as qsStringify } from 'qs'

import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { IAxiosRetryConfig } from 'axios-retry'
import type { ErrorMessageMode, ResponseResult } from './type'

class Axios {
  private instance: AxiosInstance
  constructor(
    config: AxiosRequestConfig,
    axiosRetryConfig: IAxiosRetryConfig = { retries: 3, retryDelay: () => 500 },
    private authorizationPrefix: string = 'Bearer ',
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
    // TODO TOKEN自动获取
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
    // TODO 响应数据处理
    this.instance.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        return Promise.reject(error)
      },
    )
  }

  private checkStatus(status: number, message: string, errorMessageMode: ErrorMessageMode = 'message') {
    let errMessage = ''
    switch (status) {
      case 400:
        errMessage = message || '请求错误'
        break
      case 401:
        errMessage = message || '未授权，请登录'
        break
      case 403:
        errMessage = message || '拒绝访问'
        break
      case 404:
        errMessage = message || '请求地址出错'
        break
      case 408:
        errMessage = message || '请求超时'
        break
      case 500:
        errMessage = message || '服务器内部错误'
        break
      case 501:
        errMessage = message || '服务未实现'
        break
      case 502:
        errMessage = message || '网关错误'
        break
      case 503:
        errMessage = message || '服务不可用'
        break
      case 504:
        errMessage = message || '网关超时'
        break
      case 505:
        errMessage = message || 'HTTP版本不受支持'
        break
      default:
        errMessage = message
        break
    }
    if (errMessage) {
      // TODO: 处理错误信息
      if (errorMessageMode === 'message') {
        // message模式
      }
      else if (errorMessageMode === 'modal') {
        // modal模式
      }
    }
  }

  private getToken() {
    const token = localStorage.getItem('token')
    return token ? `${this.authorizationPrefix}${token}` : ''
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
