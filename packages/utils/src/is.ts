export function isUrl(path: string): boolean {
  const reg = /^(?:https?|ftp):\/\/[^\s/$.?#].\S*$/i
  return reg.test(path)
}

export function isExternal(path: string): boolean {
  return /^(?:https?:|mailto:|tel:)/.test(path)
}

export function isShowMenu(route) {
  return route?.meta?.menu?.show !== false
}

export function isString(val: unknown) {
  return is(val, 'String')
}

export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`
}
