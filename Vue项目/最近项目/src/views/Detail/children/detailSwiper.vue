<template>
<!-- detail轮播图 -->
  <div class="detailswiper">
    <el-carousel height="350px">
      <el-carousel-item v-for="item in swiperimg" :key="item.acm">
        <a href="#">
          <img v-lazy="item" alt />
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "detailswiper",
  props: {
    swiperimg: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style  lang='less'>
.detailswiper {
  height: 350px;
  .el-carousel__indicators--horizontal {
    left: 49%;
  }
}
img {
  width: 100%;
  height: 100%;
}
</style>