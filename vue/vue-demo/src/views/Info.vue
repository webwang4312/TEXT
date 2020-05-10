<template>
  <Carousel autoplay v-model="value2" loop  autoplay-speed='8000'>
    <CarouselItem>
      <div class="demo-carousel">
        <img src="https://p2.ssl.qhimgs1.com/sdr/400__/t01deae670060b6accc.jpg" />
      </div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">
        <img src="https://p2.ssl.qhimgs1.com/sdr/400__/t01deae670060b6accc.jpg" />
      </div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">
        <img src="https://p2.ssl.qhimgs1.com/sdr/400__/t01deae670060b6accc.jpg" />
      </div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">
        <img src="https://p2.ssl.qhimgs1.com/sdr/400__/t01deae670060b6accc.jpg" />
      </div>
    </CarouselItem>
  </Carousel>
</template>
<style  scoped>
img {
  width: auto;
  height: 50vh;
}
</style>
<script>
export default {
  data() {
    return {
      value2: 0
    };
  }
};
</script>

