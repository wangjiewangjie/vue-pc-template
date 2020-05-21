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
    @select="handleSelect"
  >
    <navitem
      v-for="(item, index) in sideBarData"
      :item="item"
      :navIndex="String(index)"
      :key="index"
    ></navitem>
  </el-menu>
</template>

<script>
import navitem from "./NavItem";
import { mapState } from "vuex";
// import store from "@/store/index";
export default {
  components: {
    navitem
  },
  data() {
    return {
      backgroundColor: "",
      textColor: "",
      activeTextColor: "",
      sideBarData: [
        {
          path: "/admin",
          iconfontname: "el-icon-s-home",
          name: "首页",
          child: []
        },
        {
          path: "/charts/index",
          iconfontname: "el-icon-s-data",
          name: "图表",
          child: []
        },
        {
          path: "/list/index",
          iconfontname: "el-icon-s-order",
          name: "列表",
          child: []
        },
        {
          path: "/excel/index",
          iconfontname: "el-icon-document",
          name: "Excel",
          child: []
        },
        {
          path: "/editor/index",
          iconfontname: "el-icon-s-tools",
          name: "富文本",
          child: []
        },
        {
          path: "/setting/index",
          iconfontname: "el-icon-s-tools",
          name: "设置",
          child: []
        }
      ]
    };
  },
  computed: { ...mapState(["isCollapse"]) },
  methods: {
    handleSelect(key, keyPath) {
      this.$store.state.navActive = key;
    }
  }
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
