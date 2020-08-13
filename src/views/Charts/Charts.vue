<template>
  <ve-line :data="chartData" :settings="chartSettings"></ve-line>
</template>

<script>
export default {
  data() {
    this.chartSettings = {
      labelMap: {
        date: "日期",
        accessuser: "访问用户",
        dailyactiveuser: "日活跃用户"
      },
      stack: { 用户: ["访问用户", "日活跃用户"] },
      area: true
    };
    return {
      chartData: {
        columns: ["date", "accessuser", "dailyactiveuser"],
        rows: []
      }
    };
  },
  mounted() {
    this.$api
      .chartsApi({})
      .then(res => {
        // sort按日期排序
        this.chartData.rows = res.data.data.sort((a, b) => {
          return b.date < a.date ? 1 : -1;
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
