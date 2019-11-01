import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isCollapse: false,
    iconCollapse: 'el-icon-s-fold'
  },
  mutations: {
    // 水平折叠收起菜单
    handleCollapse(state) {
      state.isCollapse = !state.isCollapse
      
      if (state.isCollapse === true) {
        state.iconCollapse = 'el-icon-s-unfold'
      } else {
        state.iconCollapse = 'el-icon-s-fold'
      }
    }
  },
  actions: {},
  modules: {}
});
