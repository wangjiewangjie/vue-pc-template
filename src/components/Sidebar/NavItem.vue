<template>
  <el-submenu v-if="item.child && item.child.length" :index="navIndex">
    <!-- 创建菜单分组 -->
    <template slot="title">
      <i class="iconfont" :class="[item.iconfontname]"></i>
      <span>{{ item.name }}</span>
    </template>
    <!-- 递归调用自身，直到subItem不含有子节点 -->
    <nav-item
      v-for="(subItem,i) in item.child"
      :key="navIndex+'-'+i"
      :navIndex="navIndex+'-'+i"
      :item="subItem"
    ></nav-item>
  </el-submenu>
  <el-menu-item v-else :index="item.path">
    <i class="iconfont" :class="[item.iconfontname]"></i>
    <span>{{ item.name }}</span>
  </el-menu-item>
</template>

<script>
export default {
  // 递归组件必须有name
  name: "NavItem",
  props: ["item", "navIndex"]
};
</script>

<style lang="scss" scoped>
.iconfont {
  margin-right: 5px;
  padding: 0 3px;
  font-size: 18px;
}
</style>