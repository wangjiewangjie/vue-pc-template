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
      :navActive="navActive"
    ></navitem>
    <!-- <el-menu-item index="/admin">
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
    </el-menu-item>-->
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
      navActive: "",
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
        //二级菜单
        // {
        //   path: "/Level-2-menu",
        //   iconfontname: "Level-2-menu",
        //   name: "Level-2-menu",
        //   child: [
        //     { path: "/Level-2-menu-1", name: "Level-2-menu-1", child: [] },
        //   ]
        // },
        //三级菜单
        // {
        //   path: "/Level-3-menu",
        //   iconfontname: "Level-3-menu",
        //   name: "Level-3-menu",
        //   child: [
        //     {
        //       path: "/Level-3-menu-1",
        //       name: "Level-3-menu-1",
        //       child: [
        //         { path: "/Level-3-menu-1-1", name: "Level-3-menu-1-1", child: [] },
        //       ]
        //     }
        //   ]
        // }
      ]
    };
  },
  computed: { ...mapState(["isCollapse"]) },
  methods: {
    handleSelect(key, keyPath) {
      this.navActive = key;
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
