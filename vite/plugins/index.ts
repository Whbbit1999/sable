import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import setupMockPlugin from "./mock";

import setupUnocssPlugin from "./unocss";

export default function setupPlugins(isBuild: boolean, env: ViteEnv) {
  return [vue(), Components(), setupUnocssPlugin(), setupMockPlugin(isBuild)];
}
