<template>
  <div class="page">
    <el-row type="flex" class="row-bg" align="middle">
      <el-col :span="7" :offset="14">
        <!-- 登录表单 -->
        <el-card shadow="always">
          <el-form :model="form" :rules="rules" ref="form" label-position="top">
            <el-form-item label="帐号" prop="account">
              <el-input
                v-model="form.account"
                placeholder="请输入帐号"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                v-model="form.password"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit('form')"
                >登录</el-button
              >
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        account: "123456",
        password: "123456"
      },
      rules: {
        account: [{ required: true, message: "请输入帐号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push("/admin");
        } else {
          // console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  height: 100%;
  .row-bg {
    height: 100%;
  }
}
</style>
