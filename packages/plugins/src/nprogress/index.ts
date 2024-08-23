import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

// 页面进度条
export function setupNProgress() {
  nprogress.configure({
    showSpinner: true,
    ease: 'ease',
    speed: 500,
    trickleSpeed: 200,
  })
}
