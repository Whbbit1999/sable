interface IData {
  data: any // 数据
  expire?: number // 过期时间
}

export const storage = {
  /**
   * 存储缓存数据
   * @param key 存储值的key
   * @param data 存储的值
   * @param expire 有效时间 分钟
   */
  set(key: string, data: any, expire?: number): void {
    const cache: IData = { data }
    if (expire)
      cache.expire = new Date().getTime() + expire * 1000 * 60

    localStorage.setItem(key, JSON.stringify(cache))
  },

  // 获取缓存数据
  get(key: string): IData | null {
    const cacheStorage = localStorage.getItem(key)

    if (!cacheStorage)
      return null

    const data: IData = JSON.parse(cacheStorage)

    const expire = data?.expire
    if (expire && expire < new Date().getTime()) {
      localStorage.removeItem(key)
      return null
    }

    return data.data
  },

  remove(key: string) {
    localStorage.removeItem(key)
  },
}
