import http from './http'

// upload image
export function uploadImage(data: FormData) {
  return http.post<{ url: string }>({
    url: 'upload/image',
    data,
  })
}
