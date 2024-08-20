type FieldType = 'input' | 'textarea' | 'checkbox' | 'radio' | 'image' | 'select' | 'switch' | 'inputNumber' | 'markdown' | 'richEditor' | undefined

interface Option {
  label: string
  disabled: boolean
  value: any
}

export interface FormFieldType {
  title: string
  name: string
  err_name?: string | undefined
  type?: FieldType
  placeholder?: string | undefined
  disabled?: boolean
  options?: Option[]
}
