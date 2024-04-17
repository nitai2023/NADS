import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { createPinia } from "pinia";
import { createApp, h } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";

const pinia = createPinia();

const app = createApp({
  render: () => h(App),
});

app.use(router).use(pinia).use(ElementPlus).mount("#app");

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
