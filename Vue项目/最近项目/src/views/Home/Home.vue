<template>
  <div id="home">
    <sticky-slot :sticky="sticky" @itemClick="tabClick"></sticky-slot>
    <scroll
      class="content"
      ref="scroll"
      @scroll="contentScroll"
      @pullingUp="loadMore"
      :data="showGoodsList"
      :pullUpLoad="true"
      :probeType="3"
    >
      <div>
        <swiper :swiperimg="swiperimg"></swiper>
        <list></list>
        <sticky-slot :sticky="sticky" @itemClick="tabClick"></sticky-slot>
        <list-show :listgoods="listgoods"></list-show>
      </div>
    </scroll>
    <back-top></back-top>
  </div>
</template>

<script>
import Swiper from "components/common/swiper/Swiper";
import List from "./children/List";
import ListShow from "./children/ListShow";
import stickySlot from "components/common/stickyslot/stickySlot";
import backTop from "components/common/backtop/backTop";
import Scroll from "components/common/scroll/Scroll";
import BScroll from "better-scroll";

import { getHomeMultidata, getHomeGoods } from "network/home.js";

import { NEW, POP, SELL, BACKTOP_DISTANCE } from "@/common/const";
export default {
  name: "Home",
  components: {
    Swiper,
    List,
    ListShow,
    stickySlot,
    backTop,
    Scroll
  },
  data() {
    return {
      swiperimg: [],
      sticky: ["流行", "新款", "精选"],
      listgoods: {
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] }
      },
      currentType: POP,
      isTabFixed: false,
      tabOffsetTop: 0,
      showBackTop: true,
      posy: Number
    };
  },
  computed: {
    showGoodsList() {
      return this.listgoods[this.currentType].list;
    }
  },
  mounted() {},

  created() {
    // 1.请求多个数据
    this.getMultiData();
    // 2.请求商品数据
    this.getlistdetail(POP);
    this.getlistdetail(NEW);
    this.getlistdetail(SELL);
  },
  activated: function() {
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, -this.posy, 300);
  },
  deactivated: function() {
    this.posy = this.$refs.scroll.scrollTop;
    //console.log(this.posy);
  },
  methods: {
    tabClick(index) {
      console.log(index+'2');
      switch (index) {
        case 0:
          this.currentType = POP;
          break;
        case 1:
          this.currentType = NEW;
          break;
        case 2:
          this.currentType = SELL;
          break;
      }
    },
    contentScroll(position) {
      //console.log(position.y);
      // 1.决定tabFixed是否显示
      this.isTabFixed = position.y < -this.tabOffsetTop;
      // 2.决定backTop是否显示
      this.showBackTop = position.y < -BACKTOP_DISTANCE;
    },
    loadMore() {
      this.getlistdetail(this.currentType);
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 300);
    },
    /* 网络请求相关方法*/
    getMultiData() {
      getHomeMultidata().then(res => {
        //console.log(res);
        // 轮播图图片
        this.swiperimg = res.data.banner.list;
        //console.log( this.swiperimg);
      });
    },

    getlistdetail(type) {
      getHomeGoods(type, this.listgoods[type].page).then(res => {
        const listgoods = res.data.list;
        this.listgoods[type].list.push(...listgoods);
        this.listgoods[type].page += 1;
        this.$refs.scroll.finishPullUp();
        //console.log(this.$store.state.pages);
      });
    }
  }
};
</script>

<style lang="less" scoped>
#home {
  padding-bottom: 40px;
  #stickyslot {
    margin-top: 30px;
  }
}
.content {
  position: absolute;
  left: 0;
  right: 0;
  height: 100vh;
  overflow: hidden;
}
</style>