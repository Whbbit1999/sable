import dayjs from 'dayjs'

import 'dayjs/locale/zh-cn'

// 导入本地化语言
import relativeTime from 'dayjs/plugin/relativeTime'

export default () => {
  dayjs.locale('zh-cn')
  dayjs.extend(relativeTime)
}
