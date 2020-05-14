<template>
  <div class="picture">
    <Row
      style="background:#eee;padding:10px;display:flex;flex-direction:row;justify-content:space-between"
    >
      <i-Col span="11">
        <Card :bordered="false">
          <p slot="title">
            <span class="iconfont icontubiao-" style="color:red"></span>
            水
            <Button type="success" ghost>月</Button>
            <Button type="success" ghost>周</Button>
            <Button type="success" ghost>日</Button>
          </p>
          <div class="dashboard-workbench">
            <div id="echarts-demo"></div>
          </div>
        </Card>
      </i-Col>

      <i-Col span="11">
        <Card :bordered="false">
          <p slot="title">
            <span class="iconfont icondian" style="color:red"></span>电
            <Button type="success" ghost>月</Button>
            <Button type="success" ghost>周</Button>
            <Button type="success" ghost>日</Button>
          </p>
          <div class="dashboard-workbench1">
            <div id="echarts-demo1"></div>
          </div>
        </Card>
      </i-Col>

      <i-Col span="11">
        <Card :bordered="false">
          <p slot="title">
            <span class="iconfont iconqitixielou" style="color:red"></span>气
            <Button type="success" ghost>月</Button>
            <Button type="success" ghost>周</Button>
            <Button type="success" ghost>日</Button>
          </p>
          <div class="dashboard-workbench2">
            <div id="echarts-demo2"></div>
          </div>
        </Card>
      </i-Col>

      <i-Col span="11">
        <Card :bordered="false">
          <p slot="title">
            <span class="iconfont iconyoutong" style="color:red"></span>油
            <Button type="success" ghost>月</Button>
            <Button type="success" ghost>周</Button>
            <Button type="success" ghost>日</Button>
          </p>
          <div class="dashboard-workbench3">
            <div id="echarts-demo3"></div>
          </div>
        </Card>
      </i-Col>
    </Row>
  </div>
</template>

<style scoped lang="less">
.ivu-col {
  margin-left: 6px;
}
.ivu-col-span-11 {
  width: 25%;
}
.dashboard-workbench {
  #echarts-demo {
    width: 300px;
    height: 300px;
  }
}
.dashboard-workbench1 {
  #echarts-demo1 {
    width: 300px;
    height: 300px;
  }
}
.dashboard-workbench2 {
  #echarts-demo2 {
    width: 300px;
    height: 300px;
  }
}
.dashboard-workbench3 {
  #echarts-demo3 {
    width: 300px;
    height: 300px;
  }
}
.ivu-btn-ghost.ivu-btn-success {
  width: 30px;
  height: 20px;
  margin-left: 5px;
  float: right;
}
.ivu-card-head p {
  height: 28px;
}
.ivu-btn {
  padding: 0;
}
</style>

<script>
import echarts from "echarts";
export default {
  name: "dashboard-workbench",
  data() {
    return {
      echartDemo: null,
      option: {
        title: {
          text: "12,368吨",
          textStyle: {
            color: "#79786A"
          },
          padding: [20, 0, 100, 20]
        },
        grid: {
          left: 55
        },
        xAxis: {
          type: "category",
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
          ]
        },
        yAxis: {
          type: "value",
          offset: 8
        },
        series: [
          {
            data: [
              3000,
              6000,
              9000,
              12000,
              15000,
              3000,
              6000,
              9000,
              12000,
              15000,
              3000,
              6000
            ],
            type: "bar",

            itemStyle: {
              normal: {
                color: "#6EBEF6"
              }
            }
          }
        ]
      },
      option1: {
        title: {
          text: "5,787度",
          textStyle: {
            color: "#79786A"
          },
          padding: [20, 0, 100, 20]
        },
        xAxis: {
          type: "category",
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
          ]
        },
        grid: {
          left: 55
        },
        yAxis: {
          type: "value",
          offset: 8
        },
        series: [
          {
            data: [
              3000,
              6000,
              9000,
              12000,
              15000,
              3000,
              6000,
              9000,
              12000,
              15000,
              3000,
              6000
            ],
            type: "bar",
            itemStyle: {
              normal: {
                color: "#C9576C"
              }
            }
          }
        ]
      },
      option2: {
        title: {
          text: "376吨",
          textStyle: {
            color: "#79786A"
          },
          padding: [20, 0, 100, 20]
        },
        xAxis: {
          type: "category",
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
          ]
        },
        yAxis: {
          type: "value",
          offset: 8
        },
        grid: {
          left: 55
        },
        series: [
          {
            data: [
              3000,
              6000,
              9000,
              12000,
              15000,
              3000,
              6000,
              9000,
              12000,
              15000,
              3000,
              6000
            ],
            type: "bar",

            backgroundStyle: {
              color: "rgba(220, 220, 220, 0.8)"
            }
          }
        ]
      },
      option3: {
        title: {
          text: "1,328升",
          textStyle: {
            color: "#79786A"
          },
          padding: [20, 0, 100, 20]
        },
        xAxis: {
          type: "category",
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
          ]
        },
        yAxis: {
          type: "value",
          offset: 2
        },
        grid: {
          left: 55
        },
        series: [
          {
            data: [
              3000,
              6000,
              9000,
              12000,
              15000,
              3000,
              6000,
              9000,
              12000,
              15000,
              3000,
              6000
            ],
            type: "bar",
            itemStyle: {
              normal: {
                color: "#C9576C"
              }
            }
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
      this.echartDemo = echarts.init(document.getElementById("echarts-demo"));
      this.echartDemo.setOption(this.option);
      this.echartDemo = echarts.init(document.getElementById("echarts-demo1"));
      this.echartDemo.setOption(this.option1);
      this.echartDemo = echarts.init(document.getElementById("echarts-demo2"));
      this.echartDemo.setOption(this.option2);
      this.echartDemo = echarts.init(document.getElementById("echarts-demo3"));
      this.echartDemo.setOption(this.option3);
    }
  }
};
</script>
