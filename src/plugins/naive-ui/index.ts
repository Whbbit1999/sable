import type { GlobalThemeOverrides } from 'naive-ui'

export function setupNaiveUI() {
  // other config
}

const lightThemeOverrides: GlobalThemeOverrides = {
  // common: {
  //   primaryColor: '#409EFF',
  // },
  common: {
    primaryColor: '#15254d',
    primaryColorHover: '#203461',
    primaryColorPressed: '#15254d',
    successColor: '#17c13e',
    successColorHover: '#3acf58',
    successColorPressed: '#0b9c31',
    errorColor: '#db413c',
    errorColorHover: '#e86d64',
    errorColorPressed: '#b52828',
    warningColor: '#faad14',
    warningColorHover: '#ffc53d',
    warningColorPressed: '#d48806',
    infoColor: '#13c2c2',
    infoColorHover: '#36cfc9',
    infoColorPressed: '#08979c',
    textColorBase: '#212121',
  },
}
const darkThemeOverrides: GlobalThemeOverrides = {
  // common: {
  //   primaryColor: '#15254d',
  //   primaryColorHover: '#203461',
  //   primaryColorPressed: '#15254d',
  //   successColor: '#17c13e',
  //   successColorHover: '#3acf58',
  //   successColorPressed: '#0b9c31',
  //   errorColor: '#db413c',
  //   errorColorHover: '#e86d64',
  //   errorColorPressed: '#b52828',
  //   warningColor: '#faad14',
  //   warningColorHover: '#ffc53d',
  //   warningColorPressed: '#d48806',
  //   infoColor: '#13c2c2',
  //   infoColorHover: '#36cfc9',
  //   infoColorPressed: '#08979c',
  //   textColorBase: '#212121',
  // },
}

export { darkThemeOverrides, lightThemeOverrides }
