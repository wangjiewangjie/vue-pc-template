<template>
  <div class="page">
    <el-steps
      :active="active"
      finish-status="success"
      simple
      style="margin-top: 20px"
    >
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>
    <component :is="stepItem"></component>
  </div>
</template>

<script>
import StepItem1 from "@/views/Steps/StepItem/StepItem1.vue";
import StepItem2 from "@/views/Steps/StepItem/StepItem2.vue";
import StepItem3 from "@/views/Steps/StepItem/StepItem3.vue";

import { mapState } from "vuex";
export default {
  components: {
    StepItem1,
    StepItem2,
    StepItem3
  },
  computed: {
    ...mapState(["active"]),
    stepItem() {
      let stepArr = ["StepItem1", "StepItem2", "StepItem3"];
      return stepArr[this.active - 1];
    }
  }
};
</script>
