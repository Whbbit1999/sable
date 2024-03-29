import http from '@/plugins/axios'

export default function useUpload() {
  /**
   * 上传图片
   * @param data 上传文件
   * @param url 接口地址
   * @returns Promise<ResponseResult<{url: string;}>>
   */
  function uploadImage(data: FormData, url = 'upload/image') {
    return http.post<{ url: string }>({
      url,
      data,
    })
  }

  return { uploadImage }
}
