import Axios from '@sable/axios'

const http = new Axios({
  baseURL: '/api',
  timeout: 10000,
  headers: {},
})

export default http
