<template>
  <el-menu
    class="el-menu-vertical"
    router
    unique-opened
    :default-active="this.$route.path"
    :background-color="backgroundColor"
    :text-color="textColor"
    :active-text-color="activeTextColor"
    :collapse="isCollapse"
  >
    <el-menu-item index="/admin">
      <i class="el-icon-s-home"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-menu-item index="/charts/index">
      <i class="el-icon-s-data"></i>
      <span slot="title">图表</span>
    </el-menu-item>
    <el-menu-item index="/list/index">
      <i class="el-icon-s-order"></i>
      <span slot="title">列表</span>
    </el-menu-item>
    <el-menu-item index="/excel/index">
      <i class="el-icon-document"></i>
      <span slot="title">Excel</span>
    </el-menu-item>
    <el-menu-item index="/editor/index">
      <i class="el-icon-s-tools"></i>
      <span slot="title">富文本</span>
    </el-menu-item>
    <el-menu-item index="/setting/index">
      <i class="el-icon-s-tools"></i>
      <span slot="title">设置</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { mapState } from "vuex";
// import store from "@/store/index";
export default {
  data() {
    return {
      backgroundColor: "",
      textColor: "",
      activeTextColor: ""
    };
  },
  computed: { ...mapState(["isCollapse"]) }
  // computed: {
  //   isCollapse() {
  //     return this.$store.state.isCollapse;
  //   }
  // }
  // computed: mapState({
  //   isCollapse: state => state.isCollapse
  // })
};
</script>

<style lang="scss" scoped>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 120px;
  height: 100%;
  min-height: 400px;
}
.el-menu {
  height: 100%;
}
</style>
