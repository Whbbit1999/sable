// 防抖函数 --> 该函数会从上一次被调用后，延迟 wait 毫秒后调用 func 方法。
export function debounce(fn: Function, wait: number = 500) {
  let timeout: NodeJS.Timeout | null = null
  return function (...args: any[]) {
    if (timeout !== null)
      clearTimeout(timeout)

    timeout = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
}
