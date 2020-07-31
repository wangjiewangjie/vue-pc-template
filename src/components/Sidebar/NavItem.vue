<template>
  <el-submenu v-if="item.child && item.child.length" :index="navIndex">
    <!-- 创建菜单分组 -->
    <template slot="title">
      <svg class="iconfont" aria-hidden="true">
        <use
          :xlink:href="
            item.path !== navActive
              ? `#${item.iconfontname}`
              : `#${item.iconfontname}-active`
          "
        ></use>
      </svg>
      <span>{{ item.name }}</span>
    </template>
    <!-- 递归调用自身，直到subItem不含有子节点 -->
    <nav-item
      v-for="(subItem, i) in item.child"
      :key="navIndex + '-' + i"
      :navIndex="navIndex + '-' + i"
      :item="subItem"
    ></nav-item>
  </el-submenu>
  <el-menu-item v-else :index="item.path">
    <svg class="iconfont" aria-hidden="true">
      <use
        :xlink:href="
          item.path !== navActive
            ? `#${item.iconfontname}`
            : `#${item.iconfontname}-active`
        "
      ></use>
    </svg>
    <span>{{ item.name }}</span>
  </el-menu-item>
</template>

<script>
import { mapState } from "vuex";
export default {
  // 递归组件必须有name
  name: "NavItem",
  props: ["item", "navIndex"],
  computed: { ...mapState(["navActive"]) }
};
</script>

<style lang="scss" scoped>
.iconfont {
  margin-right: 5px;
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
