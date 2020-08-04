<template>
  <div class="page">
    {{ timeFormat() }}
  </div>
</template>

<script>
import { timeFormat } from "@/utils/common";
export default {
  data() {
    return {};
  },
  methods: {
    timeFormat
  }
};
</script>

<style></style>
