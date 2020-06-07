<template>
  <div id="cart">
    <el-container style="flex-direction:column;">
      <el-header style="height:44px">
        <nav-bar class="nav-bar">
          <div slot="center">购物车({{cartCount}})</div>
        </nav-bar>
      </el-header>

      <div class="list position wrapper" ref="wrapper">
        <div>
          <el-main>
            <column-chart></column-chart>
            <router-link to="/table">
              <el-button type="primary">商品练习</el-button>
            </router-link>
            <router-view></router-view>
            <br />
            <van-cell is-link @click="showPopup">
              <van-button type="danger">展示弹出层</van-button>
            </van-cell>
            <router-link to="/bootstrap">
              <b-button variant="danger">bootstrap</b-button>
            </router-link>
            <router-view></router-view>

            <van-popup v-model="show" position="bottom" :style="{ height: '60%' }">
              <login></login>
            </van-popup>
            <Maps></Maps>
          </el-main>
        </div>
      </div>
      <el-footer>
        <bottom-bar></bottom-bar>
      </el-footer>
    </el-container>
    <!-- <cart-list class="cart-list" :cart-list="cartList"></cart-list> -->
  </div>
</template>

<script>
import BScroll from "better-scroll";
import NavBar from "components/common/navbar/NavBar";
import BottomBar from "./childComps/BottomBar";
import ColumnChart from "components/content/echarts/ColumnChart";
import Maps from "components/content/echarts/Maps";
import Login from "views/profile/childComps/Login";

export default {
  name: "Cart",
  data() {
    return { show: false };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    onSubmit(values) {
      console.log("submit", values);
    }
  },
  components: {
    NavBar,
    Login,
    BottomBar,
    ColumnChart,
    Maps
  },
  mounted() {
    const scroll = new BScroll(this.$refs.wrapper);
  },
  computed: {
    cartList() {
      return this.$store.getters.cartList;
    },
    cartCount() {
      return this.$store.getters.cartCount;
    }
  }
};
</script>

<style scoped>
.list {
  left: 0;
  right: 0;
  top: 175px;
  bottom: 0;
  overflow: hidden;
}

#cart {
  /*position: relative;*/
  height: 100vh;
}
.el-header {
  padding: 0;
}
.el-main {
  padding: 0;
}
.nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}

.cart-list {
  position: absolute;
  top: 44px;
  bottom: 49px;
}
</style>
