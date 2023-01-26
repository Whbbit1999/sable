import { uploadImage } from '@/api/uploadApi'

export default class {
  editor: toastui.Editor
  constructor(public el: string, public initialValue: string, public height: string) {
    this.editor = new toastui.Editor({
      el: document.querySelector(el),
      height,
      initialValue,
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      // toolbarItems: this.toolbar(),
    })
    this.ImageHook()
  }
  // 工具条
  private toolbar() {}

  // 自定义上传图片
  private ImageHook() {
    this.editor.removeHook('addImageBlobHook')
    this.editor.addHook('addImageBlobHook', async (blob, callback) => {
      console.log(blob)
      const form = new FormData()
      form.append('file', blob, blob.name)

      const { data } = await uploadImage(form)

      callback(data.url, blob.name)
    })
  }
}
