<template>
  <div id="home">
    <!-- 插槽引用 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <Scroll
      class="content"
      ref="scroll"
      @scroll="contentScroll"
      @pullingUp="loadMore"
      :data="showGoods"
      :pull-up-load="true"
      :probe-type="3"
    >
      <!-- 轮播图制作 -->
      <swiper :banners="banners" ref="hSwiper"></swiper>
      <!-- 推荐信息 -->
      <recomendview></recomendview>
      <!-- 单个图片 -->
      <feature-view :features="recommends"></feature-view>
      <!-- 导入吸顶灯效果 -->
      <tab-control @itemClick="tabClick" :titles="['流行', '新款', '精选']" ref="tabControl"></tab-control>
      <!-- 导入商品列表 -->
      <goods-list :goods="showGoods"></goods-list>
    </Scroll>
    <back-top @backTop="backTop" class="back-top" v-show="showBackTop">
      <img src="~assets/img/common/top.png" alt />
    </back-top>
  </div>
</template>

<script>
// 导入home.js数据端请求，请求数据
import {
  getHomeMultidata,
  getHomeGoods,
  BANNER,
  RECOMMEND
} from "network/home.js";

// 导入变量
import { NEW, POP, SELL, BACKTOP_DISTANCE } from "@/common/const";

// 导入顶部插槽
import NavBar from "components/common/navbar/NavBar.vue";
// 导入轮播图组件
import swiper from "./childComps/swiper";
// 导入展示信息
import recomendview from "./childComps/recomendview";
// 导入单个图片
import FeatureView from "./childComps/FeatureView";
// 导入吸顶灯效果
import TabControl from "components/content/tabControl/TabControl.vue";
// 导入goodlist商品列表
import goodsList from "components/content/goods/Goodslist.vue";
//导入滚动效果scroll
import Scroll from "components/common/scroll/Scroll.vue";
// 回到顶部图标
import BackTop from "components/content/backTop/BackTop.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    Scroll,
    TabControl,
    BackTop,
    swiper,
    FeatureView,
    recomendview,
    goodsList
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goodsList: {
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] }
      },
      currentType: POP,
      isTabFixed: false,
      tabOffsetTop: 0,
      showBackTop: true
    };
  },
  // 计算属性
  computed: {
    showGoods() {
      return this.goodsList[this.currentType].list;
    }
  },
  mounted() {},
  // 创建后加载请求
  created() {
    // 1.请求多个数据
    this.getMultiData();
    // 2.请求商品数据
    this.getHomeProducts(POP);
    this.getHomeProducts(NEW);
    this.getHomeProducts(SELL);
  },
  activated: function() {
    //调用startTimer函数
    this.$refs.hSwiper.startTimer();
  },
  deactivated: function() {
    this.$refs.hSwiper.stopTimer();
  },
  updated() {
    // this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
     //console.log(this.tabOffsetTop);
  },
  methods: {
    tabClick(index) {
      //console.log(index);
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
      // 1.决定tabFixed是否显示
      this.isTabFixed = position.y < -this.tabOffsetTop;
      // 2.决定backTop是否显示
      //this.showBackTop = position.y < -BACKTOP_DISTANCE;
    },
    loadMore() {
      this.getHomeProducts(this.currentType);
    },
    // 回到最上面
    backTop() {
      //console.log(this.$refs);
      this.$refs.scroll.scrollTo(0, 0, 100);
    },
    /**
     * 网络请求相关方法
     */
    getMultiData() {
      getHomeMultidata().then(res => {
        //console.log(this.$refs.tabControl);
        //console.log(res.data.recommend.list[0].image);
        this.banners = res.data[BANNER].list;
        this.recommends = res.data[RECOMMEND].list;
        // 下次更新DOM时,获取新的tabOffsetTop值(不保险,可以在updated钩子中获取)
        this.$nextTick(() => {
          this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
        });
      });
    },
    getHomeProducts(type) {
      getHomeGoods(type, this.goodsList[type].page).then(res => {
        // 塞入数组
        //console.log(res.data.list);
        //console.log(this.goodsList.pop.page);
        const goodsList = res.data.list;
        this.goodsList[type].list.push(...goodsList);
        this.goodsList[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    }
  }
};
</script>

<style scoped lang='less'>
.collect{
  width: 20px;
  height:20px;
}
.nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}
// 流行新款精选吸顶效果
.tab-control {
  position: sticky;
  top: 44px;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 100px;
  left: 0;
  right: 0;
}
.fixed {
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
}
.back-top {
  position: fixed;
  right: 10px;
  bottom: 60px;
}
</style>
