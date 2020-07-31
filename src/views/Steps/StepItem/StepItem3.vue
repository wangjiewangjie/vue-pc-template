<template>
  <div>
    <div>StepItem3</div>
    <el-button style="margin-top: 12px;" @click="handleFinish">完成</el-button>
    <el-button style="margin-top: 12px;" @click="handleLast">上一步</el-button>
  </div>
</template>

<script>
import store from "@/store/index";
export default {
  created() {
    console.log("StepItem3");
  },
  methods: {
    handleFinish() {
      alert("完成");
    },
    handleLast() {
      this.$store.commit("handleLast");
    }
  },
  store
};
</script>
