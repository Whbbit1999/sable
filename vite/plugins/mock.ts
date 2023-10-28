// mock数据
import { viteMockServe } from 'vite-plugin-mock'

export default function setupMockPlugin(isBuild: boolean) {
  return viteMockServe({
    mockPath: 'mock',
    enable: isBuild,
  })
}
