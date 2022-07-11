import http from "../plugins/axios";
interface User {
  name: string;
}
export async function getUserInfoApi() {
  return http.request<User>({
    url: `getUserInfo`,
  });
}
