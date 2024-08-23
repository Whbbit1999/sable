import http from './http'

export async function getNotifies() {
  return http.post({ url: 'notify' })
}

export async function getMessages() {
  return http.post({ url: 'message' })
}
