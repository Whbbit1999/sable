export function isUrl(path: string): boolean {
  const reg =
    /(((^https?:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)$/
  return reg.test(path)
}

export function isExternal(path: string): boolean {
  return /^(https?:|mailto:|tel:)/.test(path)
}

export function isShowMenu(route) {
  return route?.meta?.menu?.show !== false
}

export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`
}
export function isString(val: unknown) {
  return is(val, 'String')
}
