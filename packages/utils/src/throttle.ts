// 节流函数 --> 在 wait 秒内最多执行 fu 一次的函数
export function throttle(fn: (any) => void, wait: number = 500) {
  let lastTime: number | null = null
  let timer: NodeJS.Timeout | null = null

  return function (...args: any[]) {
    const nowTime = Date.now()
    if (lastTime && nowTime - lastTime < wait) {
      clearTimeout(timer as NodeJS.Timeout)
      timer = setTimeout(() => {
        lastTime = Date.now()
        fn.apply(this, args)
      }, wait)
    }
    else {
      lastTime = nowTime
      fn.apply(this, args)
    }
  }
}
