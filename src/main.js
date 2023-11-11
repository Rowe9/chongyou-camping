import { createApp } from "vue";
import App from "./App.vue";
import "@/style/index.scss";
import pinia from "@/store";
import router from "@/router";
import ElementPlus from "element-plus"; // 引入 ElementPlus 组件

// Element Plus
import "element-plus/theme-chalk/index.css"; // 引入 ElementPlus 组件样式
const app = createApp(App);

app.use(pinia);
app.use(ElementPlus);
app.use(router);
app.mount("#app");
