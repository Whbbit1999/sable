import http from '../plugins/axios'

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

export async function userList(page = 1) {
  return http.get<IUserModel[]>({
    url: `users?page=${page}`,
  })
}
