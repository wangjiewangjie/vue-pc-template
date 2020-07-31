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
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    navitem
  },
  data() {
    return {
      backgroundColor: "",
      textColor: "",
      activeTextColor: "",
      sideBarData: []
    };
  },
  computed: { ...mapState(["isCollapse"]) },
  created() {
    this.$api
      .navListApi({})
      .then(res => {
        this.sideBarData = res.data.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    ...mapMutations(["handleSelectMenu"])
  }
};
</script>

<style lang="scss" scoped>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
  min-height: 400px;
}
.el-menu {
  height: 100%;
}
</style>
