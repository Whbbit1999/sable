import http from '@/plugins/axios'

export async function getNotifies() {
  return http.post({ url: 'notify' })
}

export async function getMessages() {
  return http.post({ url: 'messages' })
}
