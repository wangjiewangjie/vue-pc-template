<template>
  <div>
    <div>StepItem2</div>
    <el-button style="margin-top: 12px;" @click="handleNext">下一步</el-button>
    <el-button style="margin-top: 12px;" @click="handleLast">上一步</el-button>
  </div>
</template>

<script>
import store from "@/store/index";
export default {
  created() {
    console.log("StepItem2");
  },
  methods: {
    handleNext() {
      this.$store.commit("handleNext");
    },
    handleLast() {
      this.$store.commit("handleLast");
    }
  },
  store
};
</script>
