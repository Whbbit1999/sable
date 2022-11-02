interface IData {
  expire?: number
  [key: string]: any
}

export default {
  set(key: string, data: IData): void {
    if (data.expire) {
      data.expire = new Date().getTime() + data.expire * 1000
    }
    localStorage.setItem(key, JSON.stringify(data))
  },

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
    }
  },
}
