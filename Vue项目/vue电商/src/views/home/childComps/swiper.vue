<template>
  <div id="swiper">
    <!-- 轮播图组件来自element ui -->
      <el-carousel>
        <el-carousel-item v-for="item in banners" :key="item.title">
          <img :src="item.image" alt />
        </el-carousel-item>
      </el-carousel>
  </div>
</template>
<style lang="less" scoped>
// 设置轮播图css
#swiper{
  height:150px;
 img {
    width: 100%;
    height: 150px;
  }
}
.el-carousel__indicators--horizontal {
  bottom: 52px;
}
.el-carousel__container{
  height: 150px;
}
</style>
<script>
import { getHomeMultidata } from "network/home.js";
export default {
  name: "swiper",
  data() {
    return { banners: [] };
  },
  created() {
    //   获取home 中banner轮播图数据
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      //   console.log(res.data.banner);
      //   this.recommends = res.data.recommend;
      //console.log(this.recommends);
    });
  }
};
</script>