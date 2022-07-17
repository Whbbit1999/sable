import { App } from "vue";
import { setupNaiveUI } from "./naive-ui";
import setupPinia from "./pinia";

import setupUnocss from "./unocss/index";
export default function (app: App) {
  setupNaiveUI(app);
  setupUnocss();
  setupPinia();
}
