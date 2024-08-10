import type { GlobalThemeOverrides } from 'naive-ui'

export function setupNaiveUI() {
  // other config
}
const basicRadius = '6px'
const common: GlobalThemeOverrides['common'] = {
  scrollbarWidth: '10px',
  borderRadius: basicRadius,
}

const lightThemeOverrides: GlobalThemeOverrides = {
  common: { ...common },
}
const darkThemeOverrides: GlobalThemeOverrides = {

  common: { ...common, cardColor: '#18181C' },
}

export { darkThemeOverrides, lightThemeOverrides }
