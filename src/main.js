import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import "./plugins/charts.js";
import "./styles/reset.css";
import "../mock";
import "default-passive-events"; //解决Chrome 增加了新的事件捕获机制－Passive Event Listeners警告
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
