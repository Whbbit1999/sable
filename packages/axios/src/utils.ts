import { createDiscreteApi } from 'naive-ui'

interface Info {
  type: 'default' | 'info' | 'success' | 'warning' | 'error'
  message: string
  title?: string
  onClose?: () => boolean | Promise<boolean>
}

const { notification, message } = createDiscreteApi(['notification', 'message'])

export function createMessage(messageType: 'notification' | 'message', info: Info) {
  if (messageType === 'message') {
    message[info.type](info.message, {
      onClose: info.onClose,
    })
  }
  else if (messageType === 'notification') {
    notification.create({
      ...info,
      title: info.title || '提示',
      content: info.message,
      onClose: info.onClose,
      duration: 2500,
      keepAliveOnHover: true,
    })
  }
}

export const handleErrors = new WeakMap()
export function throttleErrorCallback(error, callback) {
  if (handleErrors.has(error))
    return

  handleErrors.set(error, error)
  return callback(error)
}

export function onClose(error) {
  return () => handleErrors.delete(error)
}
