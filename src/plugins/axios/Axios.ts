import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class Axios {
  private instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors();
  }

  public request<T, D = ResponseResult<T>>(config: AxiosRequestConfig) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.instance.request<D>(config);
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    }) as Promise<D>;
  }

  private interceptors() {
    this.interceptorsRequest();
    this.interceptorsResponse();
  }

  // 请求拦截
  private interceptorsRequest() {
    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },

      (error) => {
        return Promise.reject(error);
      }
    );
  }

  // 响应拦截
  private interceptorsResponse() {
    this.instance.interceptors.response.use(
      (response) => {
        return response;
      },

      (error) => {
        return Promise.reject(error);
      }
    );
  }
}
export default Axios;
