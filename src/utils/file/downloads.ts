interface DownloadByUrlProps {
  url: string
  filename: string
  target?: '_self' | '_blank'

}
export function downloadByUrl({ url, filename, target = '_blank' }: DownloadByUrlProps) {
  const isChrome = window.navigator.userAgent.toLowerCase().includes('chrome')
  const isSafari = window.navigator.userAgent.toLowerCase().includes('safari')

  if (/(iP)/g.test(window.navigator.userAgent)) {
    console.error('Your browser does not support download!')
    return false
  }

  if (isChrome || isSafari) {
    const link = document.createElement('a')
    link.href = url
    link.target = target

    if (link.download !== undefined)
      link.download = filename || url.substring(url.lastIndexOf('/') + 1, url.length)

    if (document.createEvent) {
      const e = document.createEvent('MouseEvent')
      e.initEvent('click', true, true)
      link.dispatchEvent(e)
      return true
    }
  }
}

export function downloadByData(data: BlobPart, filename: string, mime?: string, bom?: BlobPart) {
  const blobData = typeof bom !== 'undefined' ? [bom, data] : [data]
  const blob = new Blob(blobData, { type: mime || 'application/octet-stream' })

  const blobUrl = window.URL.createObjectURL(blob)
  const tempLink = document.createElement('a')
  tempLink.style.display = 'none'
  tempLink.href = blobUrl
  tempLink.setAttribute('download', filename)

  if (typeof tempLink.download === 'undefined')
    tempLink.setAttribute('target', '_blank')

  document.body.appendChild(tempLink)
  tempLink.click()
  document.body.removeChild(tempLink)
  window.URL.revokeObjectURL(blobUrl)
}

export function downloadByBase64(buf: string, filename: string, mime?: string, bom?: BlobPart) {
  const base64Buf = dataURLToBlob(buf)
  downloadByData(base64Buf, filename, mime, bom)
}

export function downloadByOnlineUrl(url: string, filename: string, mime?: string, bom?: BlobPart) {
  urlToBase64(url).then((base64) => {
    downloadByBase64(base64, filename, mime, bom)
  })
}

export function dataURLToBlob(base64Buf: string): Blob {
  const arr = base64Buf.split(',')
  const typeItem = arr[0]
  const mime = typeItem.match('/:(.*?);/')[1]
  const bstr = window.atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)

  while (n--)
    u8arr[n] = bstr.charCodeAt(n)

  return new Blob([u8arr], { type: mime })
}

export function urlToBase64(url: string, mineType?: string): Promise<string> {
  return new Promise((resolve, reject) => {
    let canvas = document.createElement('canvas') as HTMLCanvasElement
    const ctx = canvas.getContext('2d')

    const img = new Image()
    img.crossOrigin = ''
    img.onload = () => {
      if (!canvas || !ctx)
        return reject(new Error('转换失败'))

      canvas.height = img.height
      canvas.width = img.width
      ctx.drawImage(img, 0, 0)
      const dataURL = canvas.toDataURL(mineType || 'image/png')
      canvas = null
      resolve(dataURL)
    }
    img.src = url
  })
}
