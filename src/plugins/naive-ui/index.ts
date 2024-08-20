import type { GlobalThemeOverrides } from 'naive-ui'

export function setupNaiveUI() {
  // other config
}
const basicRadius = '6px'
const common: GlobalThemeOverrides['common'] = {
  scrollbarWidth: '10px',
  borderRadius: basicRadius,
}
const tag: GlobalThemeOverrides['Tag'] = {
  borderRadius: '4px',
}
const themeOverrides = {
  common,
  Tag: tag,
}
const lightThemeOverrides: GlobalThemeOverrides = {
  common: { ...common },
  Tag: tag,
}
const darkThemeOverrides: GlobalThemeOverrides = {
  common: { ...common, cardColor: '#18181C' },
  Tag: tag,
}

export { themeOverrides, darkThemeOverrides, lightThemeOverrides }
