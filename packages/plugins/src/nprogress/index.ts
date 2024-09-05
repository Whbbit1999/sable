import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

// 页面进度条
export function setupNProgress() {
  nprogress.configure({
    showSpinner: true,
    speed: 500,
    trickleSpeed: 200,
  })
}
