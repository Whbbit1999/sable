type MdEditorPreviewTheme = 'default' | 'github' | 'vuepress' | 'mk-cute' | 'smart-blue' | 'cyanosis'
type MdEditorCodeTheme = 'atom' | 'a11y' | 'github' | 'gradient' | 'kimbie' | 'paraiso' | 'qtcreator' | 'stackoverflow'

interface MarkdownEditorProps {
  modelValue: string
  previewTheme?: MdEditorPreviewTheme
  codeTheme?: MdEditorCodeTheme
  preview?: boolean
  placeholder?: string

  uploadImage?: (form: FormData) => Promise<any>
}

export type { MarkdownEditorProps }
