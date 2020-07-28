import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import IconFont from "./components/IconFont";

// 引入antD，已使用babel-plugin-import，无需引入css
import "@/util/cusImportAntd";
import "./styles/index.scss";

// 引入mocks
if (process.env.NODE_ENV === "development") {
  require("../mock");
}

Vue.use(IconFont);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
