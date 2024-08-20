import { ref } from 'vue'
import dayjs from 'dayjs'
import { storage } from '@sable/utils'

const key = 'interval_exec_time'
const time = ref<number>(0)
let intervalId: NodeJS.Timeout | null = null

export function useIntervalRequest(timeout: number, fn: (...args) => void) {
  function interval() {
    intervalId = setInterval(() => {
      time.value = dayjs(storage.get(key).data).add(timeout, 'second').diff(dayjs(), 'second')
      if (time.value <= 0) {
        clearInterval(intervalId)
        intervalId = undefined
      }
    }, 50)
  }

  async function exec(...args: any[]) {
    if (storage.get(key))
      return

    await fn(args)
    storage.set(key, dayjs(), timeout)
    interval()
  }

  if (storage.get(key))
    interval()

  return { time, exec }
}
