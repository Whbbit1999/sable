import Axios from '@sable/axios'
import { CacheEnum } from '@/enum/cacheEnums'

const http = new Axios({
  baseURL: '/api',
  timeout: 10000,
  headers: {},
}, {
  authorizationPrefix: 'Bearer',
  tokenKey: CacheEnum.TOKEN,
})

export default http
