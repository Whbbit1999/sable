import http from '../plugins/axios'
interface User {
  name: string
}
export async function getUserInfoApi() {
  return http.request<User>({
    url: `getUserInfo`,
  })
}

interface LoginInterface {
  token: string
}
export interface ILoginForm {
  username: string
  password: string
}
export async function login(data: ILoginForm) {
  return http.request<LoginInterface>({
    url: `login`,
    method: 'POST',
    data,
  })
}
