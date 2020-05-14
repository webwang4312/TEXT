<template>
  <div class="picture">
    <Row class="row">
      <Col span="5.5">
        <Card>
          <p slot="title" style="text-align:center">业务指标</p>
          <div id="echarts-demo4"></div>
        </Card>
      </Col>
      <Col span="5.5" offset="1">
        <Card>
          <p slot="title"  style="text-align:center">业务指标</p>
            <div id="echarts-demo5"></div>
        </Card>
      </Col>
      <Col span="5.5" offset="1">
        <Card>
          <p slot="title"  style="text-align:center">业务指标</p>
            <div id="echarts-demo6"></div>
        </Card>
      </Col>
      <Col span="5.5" offset="1">
        <Card>
          <p slot="title"  style="text-align:center">业务指标</p>
            <div id="echarts-demo7"></div>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<style scoped lang="less">
.ivu-card-body {
    padding: 40px;
}
.ivu-card{
width: 280px;
}
.row {
  display: flex;
  flex-direction: row;
}
#echarts-demo4 {
  width: 250px;
  height: 300px;
  margin-left: -23px;
}
#echarts-demo5 {
  width: 250px;
  height: 300px;
  margin-left: -33px;
}
#echarts-demo6 {
  width: 250px;
  height: 300px;
  margin-left: -33px;
}
#echarts-demo7{
  width: 250px;
  height: 300px;
  margin-left: -33px;
}
</style>

<script>
import echarts from "echarts";
export default {
  name: "yibiaopan",
  data() {
    return {
      echartDemo: null,
      option4: {
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
      },
       option5: {
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
            data: [{ value: 20, name: "生产率" }]
          }
        ]
      },
       option6: {
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
            data: [{ value:30, name: "及格率" }]
          }
        ]
      },
       option7: {
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
            data: [{ value: 40, name: "完成率" }]
          }
        ]
      }
    };
  },
  mounted() {
    this.initEcharts();
  },

  methods: {
    initEcharts() {
      this.echartDemo4 = echarts.init(document.getElementById("echarts-demo4"));
      this.echartDemo4.setOption(this.option4);
       this.echartDemo5 = echarts.init(document.getElementById("echarts-demo5"));
      this.echartDemo5.setOption(this.option5);
       this.echartDemo6 = echarts.init(document.getElementById("echarts-demo6"));
      this.echartDemo6.setOption(this.option6);
       this.echartDemo7 = echarts.init(document.getElementById("echarts-demo7"));
      this.echartDemo7.setOption(this.option7);
      setInterval(() => {
        this.option4.series[0].data[0].value =
          (Math.random() * 100).toFixed(2) - 0;
        this.echartDemo4.setOption(this.option4, true);
      }, 1000);
       setInterval(() => {
        this.option5.series[0].data[0].value =
          (Math.random() * 100).toFixed(2) - 0;
        this.echartDemo5.setOption(this.option5, true);
      }, 2000);
       setInterval(() => {
        this.option6.series[0].data[0].value =
          (Math.random() * 100).toFixed(2) - 0;
        this.echartDemo6.setOption(this.option6, true);
      }, 2000);
       setInterval(() => {
        this.option7.series[0].data[0].value =
          (Math.random() * 100).toFixed(2) - 0;
        this.echartDemo7.setOption(this.option7, true);
      }, 1000);
    }
  }
};
</script>
