import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import "./plugins/charts.js";
import "./styles/reset.css";
import "../mock";
import * as api from "@/api/api";
import "../public/icon/iconfont.css";
import "../public/icon/iconfont.js";

Vue.config.productionTip = false;
Vue.prototype.$api = api;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
