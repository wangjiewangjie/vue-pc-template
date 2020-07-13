<template>
  <div class="page">
    <el-container>
      <el-aside style="width:auto;">
        <Siderbar />
        <!-- 侧边栏组件 -->
      </el-aside>
      <!-- / 侧边栏容器 -->
      <el-container style="width:auto;right:0;">
        <el-header>
          <i class="icon" :class="iconCollapse" @click="handleCollapse"></i>

          <el-breadcrumb separator="/">
            <el-breadcrumb-item
              v-for="item in breadcrumbArr"
              :key="item.path"
              :to="item.path"
              >{{ item.meta.title }}</el-breadcrumb-item
            >
          </el-breadcrumb>
          <!-- / 动态面包屑 -->
          <el-button
            icon="el-icon-switch-button"
            circle
            @click="handleLogout"
          ></el-button>
          <!-- / 退出 -->
        </el-header>
        <!-- / 顶栏容器 -->
        <el-main>
          <!-- 根据路由配置状态判断是否需要保存组件状态或避免重新渲染 -->
          <transition name="fade" mode="out-in">
            <keep-alive>
              <router-view
                v-if="$route.meta.keepAlive"
                :key="$route.fullPath"
              ></router-view>
            </keep-alive>
          </transition>
          <!-- / 保留组件状态或避免重新渲染 -->
          <transition name="fade" mode="out-in">
            <router-view
              v-if="!$route.meta.keepAlive"
              :key="$route.fullPath"
            ></router-view>
          </transition>
          <!-- /  页面路由-->
        </el-main>
        <!-- / 主要区域容器 -->
      </el-container>
      <!-- / 外层容器 -->
    </el-container>
  </div>
</template>

<script>
import { Siderbar } from "@/components";
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    Siderbar
  },
  data() {
    return {
      breadcrumbArr: []
    };
  },
  computed: { ...mapState(["iconCollapse"]) },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    ...mapMutations(["handleCollapse"]),
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name);
      const first = matched[0];

      if (
        first &&
        first.name.trim().toLocaleLowerCase() !== "home".toLocaleLowerCase()
      ) {
        matched = [{ path: "/admin", meta: { title: "首页" } }].concat(matched);
      }
      this.breadcrumbArr = matched;
    },
    handleLogout() {
      this.$router.replace("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
}
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: $right;
  background: rgba($color: $white, $alpha: 1);
  color: $mainTextColor;
  line-height: 60px;
  box-shadow: 2px 2px 5px rgba($color: $black, $alpha: 0.15);
  .icon {
    font-size: $large;
    cursor: pointer;
  }
  .el-breadcrumb {
    flex: 1;
    padding: 0 20px;
  }
  .el-icon-setting {
    color: $mainTextColor;
  }
}

// 路由过渡动画
.fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>
