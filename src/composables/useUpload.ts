import http from '@/plugins/axios'

export default () => {
  /**
   * 上传图片
   * @param data 上传文件
   * @param url 接口地址
   * @returns
   */
  function uploadImage(data: FormData, url: string = 'upload/image') {
    return http.post<{ url: string }>({
      url,
      data,
    })
  }

  return { uploadImage }
}
