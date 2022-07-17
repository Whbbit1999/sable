import { App } from "vue";
import { setupNaiveUI } from "./naive-ui";

import setupUnocss from "./unocss/index";
export default function (app: App) {
  setupNaiveUI(app);
  setupUnocss();
}
