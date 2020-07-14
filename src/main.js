import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入antD，已使用babel-plugin-import，无需引入css
import "@/util/cusImportAntd";

// 引入axios
// import request from "@/util/requset";
// import VueAxios from "vue-axios";
// Vue.use(VueAxios, request);

// 引入mocks
// if (process.env.NODE_ENV === "development") {
// }

import "@/mock/index.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
