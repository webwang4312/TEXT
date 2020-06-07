<template>
  <div id="maps">
    <el-card class="box-card">
      <div class="net_line_charts" id="mapstart" style="height: 300px;width:100%;"></div>
    </el-card>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "maps",
  //   引入的组件
  components: {},
  //   数据
  data() {
    return {
      list: []
    };
  },
  mounted() {
    var myChart2 = echarts.init(document.getElementById("mapstart"));
    var option2 = {
      tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
      },
      toolbox: {
        feature: {
          restore: {},
          saveAsImage: {}
        }
      },
      series: [
        {
          name: "业务指标",
          type: "gauge",
          detail: { formatter: "{value}%" },
          data: [{ value: 50, name: "完成率" }]
        }
      ]
    };
    setInterval(function() {
      option2.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
      myChart2.setOption(option2, true);
    }, 2000);

    myChart2.setOption(option2);
  },
  // 创建后加载请求，axios用到
  created() {},
  methods: {}
};
</script>

<style scoped lang='less'>
</style>
