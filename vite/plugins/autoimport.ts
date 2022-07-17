import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import { Plugin } from "vite";

export default function autoImport(isBuild: boolean, env: ViteEnv) {
  return Components({
    // auto inport components 自动加载组件
    resolvers: [NaiveUiResolver()],
  });
}
