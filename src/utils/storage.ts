interface IData {
  expire?: number // 过期时间
  [key: string]: any // 数据
}

export default {
  // 存储缓存数据
  set(key: string, data: IData): void {
    if (data.expire) {
      data.expire = new Date().getTime() + data.expire * 1000
    }
    localStorage.setItem(key, JSON.stringify(data))
  },

  // 获取缓存数据
  get(key: string): IData | null {
    const item = localStorage.getItem(key)
    if (item) {
      const data = JSON.parse(item)
      if (data.expire) {
        if (data.expire < new Date().getTime()) {
          localStorage.removeItem(key)
          return null
        } else {
          return data as IData
        }
      }
    } else {
      return null
    }
  },
}
