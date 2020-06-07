<template>
  <div id="test">
    <el-card class="box-card">
      <div class="net_line_charts" id="bar" style="height: 300px;width:100%;"></div>
    </el-card>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  name: "test",
  //   引入的组件
  components: {},
  //   数据
  data() {
    return {
      list: []
    };
  },
  mounted() {
    var myChart = echarts.init(document.getElementById("bar"));
    var option = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: [220, 200, 150, 80, 70, 110, 130],
          type: "bar",
          showBackground: false,
          backgroundStyle: {
            color: "rgba(220, 220, 220, 0.8)"
          }
        }
      ]
    };
    myChart.setOption(option);
  },
  // 创建后加载请求，axios用到
  created() {},
  methods: {}
};
</script>

<style scoped lang='less'>
</style>
