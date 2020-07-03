import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入antD，因为已经使用了babel-plugin-import，此处无需引入css
import "@/util/cusImportAntd";

// 引入axios
import request from "@/util/requset";
import VueAxios from "vue-axios";
Vue.use(VueAxios, request);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
