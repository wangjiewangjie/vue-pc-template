import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import "./plugins/charts.js";
import "./styles/reset.css";

Vue.config.productionTip = false;

/* 路由发生变化修改页面title */
router.afterEach((to,from) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
