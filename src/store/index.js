import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navActive: "",
    isCollapse: false,
    iconCollapse: "el-icon-s-fold"
  },
  mutations: {
    // 水平折叠收起菜单
    handleCollapse(state) {
      state.isCollapse = !state.isCollapse;
      if (state.isCollapse === true) {
        state.iconCollapse = "el-icon-s-unfold";
      } else {
        state.iconCollapse = "el-icon-s-fold";
      }
    }
  },
  actions: {},
  modules: {},
  strict: false // 不要在发布环境下启用严格模式！严格模式会深度监测状态树来检测不合规的状态变更——请确保在发布环境下关闭严格模式，以避免性能损失。
});
