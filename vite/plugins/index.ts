import vue from "@vitejs/plugin-vue";
import autoImport from "./autoImport";

import setupMockPlugin from "./mock";

import setupUnocssPlugin from "./unocss";

export default function setupPlugins(isBuild: boolean, env: ViteEnv) {
  return [
    vue(),
    autoImport(isBuild, env),
    setupUnocssPlugin(),
    setupMockPlugin(isBuild),
  ];
}
