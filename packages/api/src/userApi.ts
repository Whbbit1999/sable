import http from './http'

export async function getUserInfoApi() {
  return http.request<IUserModel>({
    url: 'getUserInfo',
  })
}

export async function login(data: ILoginForm) {
  return http.post<ILoginModel>({
    url: 'login',
    data,
  })
}

export async function userList(params: Record<string, any>) {
  return http.get<IUserModel[]>({
    url: `users`,
    params,
  })
}
