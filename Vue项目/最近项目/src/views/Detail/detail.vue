<template>
  <div id="listdetail">
    <detail-nav-bar @itemClick="titleClick" :current-index="currentIndex"></detail-nav-bar>
    <detail-swiper :swiperimg="swiperimgs.image"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
    <detail-param-info ref="param" :param-info="paramInfo"></detail-param-info>
    <detail-bottom-bar></detail-bottom-bar>
  </div>
</template>

<script>
import detailSwiper from "./children/detailSwiper";
import detailBottomBar from "./children/detailBottomBar";
import detailBaseInfo from "./children/detailBaseInfo";
import detailNavBar from "./children/detailNavBar";
import detailShopInfo from "./children/detailShopInfo";
import detailGoodsInfo from "./children/detailGoodsInfo";
import detailParamInfo from "./children/detailParamInfo";

import { getHomeGoods } from "network/home";
import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam
} from "network/detail";
export default {
  name: "listdetail",
  components: {
    detailSwiper,
    detailBottomBar,
    detailBaseInfo,
    detailNavBar,
    detailShopInfo,
    detailGoodsInfo,
    detailParamInfo
  },
  data() {
    return {
      shopdetail: [],
      swiperimgs: [{ image: [] }],
      iid: "",
      goods: {},
      currentIndex: 0,
      shop: {},
      detailInfo: {},
      paramInfo: {}
    };
  },

  props: {},

  mounted() {
    this._getDetailData();
  },

  created() {
    getHomeGoods(this.$store.state.type, this.$store.state.pages).then(res => {
      let boom = res.data.list;
      for (let i = 0; i < boom.length; i++) {
        if (this.$route.query.iid == boom[i].iid) {
          this.shopdetail = boom[i];
        }
      }
    });

    this._getDetailData();
  },

  methods: {
    returned() {
      this.$router.push({ path: "/home" });
    },
    _getDetailData() {
      // 1.获取iid
      const iid = this.$route.query.iid;
      this.iid = iid;
      //console.log(this.iid);
      getDetail(iid).then(res => {
        //console.log(res);
        const data = res.result;
        // 获取轮播信息
        this.swiperimgs.image = data.itemInfo.topImages;
        // 2.3.获取商品信息
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        // 2.4.获取店铺信息
        this.shop = new Shop(data.shopInfo);
        // 2.5.获取商品信息
        this.detailInfo = data.detailInfo;
        // 2.6.保存参数信息
        this.paramInfo = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );
      });
    },
    titleClick(index) {
      console.log(index);
    }
  }
};
</script>
<style lang="less" scoped>
#listdetail {
  margin-bottom: 20px;
  .listheader {
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    background-color: gray;
    span {
      display: inline-block;
      line-height: 30px;
      font-size: 25px;
    }
  }
}
</style>