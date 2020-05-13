<template>
  <div class="home">
    <van-swipe :autoplay="4000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>


<style scoped>
.van-swipe{
  width:400px;
  height:200px;
  margin:30px auto;
}
 img{
    width: 400px;
     height: 200px;
  }
</style>

<script>
export default {
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ]
    };
  }
};
</script>