<template>
  <div class="home">
    <el-carousel :interval="4000" type="card" height="200px">
      <img src="https://p1.ssl.qhimgs1.com/sdr/400__/t01f9513b0508a15051.jpg" alt />
      <el-carousel-item v-for="item in idx" :key="item">{{item}}</el-carousel-item>
    </el-carousel>
    <img src="https://p1.ssl.qhimgs1.com/sdr/400__/t01f9513b0508a15051.jpg" alt />
  </div>
</template>


<style>
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
  data() {
    return {
      idx: 3
    };
  },
  components: {}
};
</script>
