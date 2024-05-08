import { dataURLToBlob } from './fileDownload'

const defaultOptions = {
  maxSize: 1024 * 1024 * 2, // 2MB
  quality: 0.8,
}

export async function compressImage(file: File, option = defaultOptions) {
  const fileSize = file.size
  const { maxSize, quality } = option

  if (fileSize <= maxSize)
    return file

  let newFile
  const reader = new FileReader()
  reader.readAsDataURL(file)

  reader.onload = (e) => {
    const img = new Image()
    img.src = e.target!.result as string

    img.onload = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')!
      const scale = Math.min(1, maxSize / fileSize)
      const width = Math.floor(img.width * scale)
      const height = Math.floor(img.height * scale)
      canvas.width = width
      canvas.height = height
      ctx.drawImage(img, 0, 0, width, height)
      const newImageData = canvas.toDataURL('image/jpeg', quality)
      const newBlob = dataURLToBlob(newImageData)
      newFile = new File([newBlob], file.name, { type: file.type })
    }
  }

  return newFile
}
