<template>
  <div id="home">
    <swiper :swiperimg="swiperimg"></swiper>
    <list></list>
    <list-show :listgoods="listgoods" ></list-show>
  </div>
</template>

<script>
import Swiper from "components/common/swiper/Swiper";
import List from "./children/List";
import ListShow from "./children/ListShow";

import { getHomeMultidata, getHomeGoods } from "network/home.js";
export default {
  name: "Home",
  components: {
    Swiper,
    List,
    ListShow
  },
  data() {
    return {
      swiperimg: [],
      listgoods: [],
      index: 1,
      type:'pop'
    };
  },
  mounted() {
     console.log(this.$children);
  },
  created() {
    // 1.请求多个数据
    this.getMultiData();

    this.getlistdetail();
  },
  methods: {
   
    /* 网络请求相关方法*/
    getMultiData() {
      getHomeMultidata().then(res => {
        //console.log(res);
        // 轮播图图片
        this.swiperimg = res.data.banner.list;
      });
    },

    getlistdetail() {
      getHomeGoods(this.type, this.index).then(res => {
        //console.log(res);
        //console.log(this.$children);
        this.listgoods.push(...res.data.list);
        this.index+=1;
      });
    }
  },
  computed: {}
};
</script>

<style lang="less" scoped>
#home {
  padding-bottom: 40px;
}
</style>