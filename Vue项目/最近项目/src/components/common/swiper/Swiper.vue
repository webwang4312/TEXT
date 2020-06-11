<template>
<!-- 轮播图效果 -->
  <div id="swiper">
    <el-carousel height="250px">
      <el-carousel-item v-for="item in swiperimg" :key="item.acm">
        <a :href="item.link">
          <img :src="item.image" alt />
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

export default {
  name: "Swiper",
  data() {
    return {
    };
  },
  props: {
    swiperimg:{
      type:Array,
      default(){
        return []
      }
    }
  },

  created() {
  },
  computed: {},
  methods: {
   
  },
  
  mounted: function() {}
};
</script>

<style  lang='less'>
#swiper {
  height: 250px;
}
img {
  width: 100%;
  height: 100%;
}
.el-carousel ul {
  bottom: 20px !important;
}
.el-carousel__indicator{
  padding:5px 5px !important;
}
.el-carousel__indicator button{
  width:20px;
  height:20px;
  border-radius: 50%;
}
</style>