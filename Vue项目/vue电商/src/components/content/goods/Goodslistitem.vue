<template>
  <div id="goodslistitem" style="width:50%">
    <div style="width:100%">
      <img :src="goodsitem.show.img" style="width:100%;height:100%" /><br>
      <span>{{goodsitem.title}}</span>
      <br />
      <span class="price">{{goodsitem.price}}</span>
      <br />
      <span class="collect">{{goodsitem.cfay}}</span>
    </div>
  </div>
</template>


<script>
export default {
  name: "goodlistitem",
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    imageLoad(){
      
    }
  }
};
</script>
<style lang="less" scoped>
</style>
    
