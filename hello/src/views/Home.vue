<template>
  <div class="home">
    <el-container>
      <el-header class="header">Header</el-header>
      <el-container>
        <el-aside width="250px" class="aside">Aside</el-aside>
        <el-container>
          <el-main class="main">
            <div class="block">
              <el-carousel height=200px type=card interval=5000>
                <el-carousel-item v-for="item in abc_img" :key="item">
                  <img :src="item.src" class="lunbotu" alt="轮播图" />
                </el-carousel-item>
              </el-carousel>
            </div>
          </el-main>
          <el-footer class="footer">Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="less" scoped>
.home {
  height: 100vh;
  .header {
    background-color: green;
    height: 140px;
  }
  .aside {
    background-color: yellowgreen;
    height: 140px;
  }
  .main {
    background-color:snow;
  }
  .footer {
    background-color: peru;
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      abc_img: [
        { src: require("../assets/img/1(20).jpg") },
        { src: require("../assets/img/1(21).jpg") },
        { src: require("../assets/img/1(25).jpg") },
        { src: require("../assets/img/1(26).jpg") }
      ]
    };
  },
  methods:{}
};
</script>
