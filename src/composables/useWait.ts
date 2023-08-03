export default function useWait() {
  function createWaiting(notification) {
    notification.warning({
      content: '修改主题正在重做，请谨慎使用',
      meta: '提示：再次点击或刷新即可复原',
      duration: 2500,
      keepAliveOnHover: true,
    })
  }
  return {
    createWaiting,
  }
}
