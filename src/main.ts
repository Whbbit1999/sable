import { createApp } from "vue";
import App from "./App.vue";
import router, { setupRouter } from "./router/index";
import setupPlugins from "./plugins/index";

async function bootstrap() {
  const app = createApp(App);
  setupRouter(app);
  setupPlugins(app);
  await router.isReady(); // 路由全部挂载后

  app.mount("#app");
}

bootstrap();
