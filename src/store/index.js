import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navActive: "",
    isCollapse: false,
    iconCollapse: "el-icon-s-fold",
    active: 1
  },
  mutations: {
    /* 水平折叠收起菜单 */
    handleCollapse(state) {
      state.isCollapse = !state.isCollapse;
      if (state.isCollapse === true) {
        state.iconCollapse = "el-icon-s-unfold";
      } else {
        state.iconCollapse = "el-icon-s-fold";
      }
    },
    /* 切换菜单 */
    handleSelectMenu(state, key) {
      state.navActive = key;
    },
    /* 下一步 */
    handleNext(state) {
      state.active++;
    },
    /* 上一步 */
    handleLast(state) {
      state.active--;
    }
  },
  actions: {},
  modules: {},
  strict: false, // 不要在发布环境下启用严格模式！严格模式会深度监测状态树来检测不合规的状态变更——请确保在发布环境下关闭严格模式，以避免性能损失。
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ]
});
