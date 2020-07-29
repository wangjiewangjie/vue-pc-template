<template>
  <div>
    <div>StepItem1</div>
    <el-button style="margin-top: 12px;" @click="handleNext">下一步</el-button>
  </div>
</template>

<script>
import store from "@/store/index";
export default {
  created() {
    console.log("StepItem1");
  },
  methods: {
    handleNext() {
      this.$store.state.active++;
    }
  },
  store
};
</script>
