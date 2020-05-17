<template>
  <div id="app">
    <!-- 顶部栏 -->
    <mt-header title="信息管理系统">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <!-- 路由出口中间栏 -->
    <router-view />

    <!-- 底部栏 -->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="Home">
        <img slot="icon" src="./assets/image/shouye.jpg" />
        首页
      </mt-tab-item>
      <mt-tab-item id="Vip">
        <img slot="icon" src="./assets/image/huiyaun.jpg" />
        会员
      </mt-tab-item>
      <mt-tab-item id="Shopcar">
        <img slot="icon" src="./assets/image/gouwuche.jpg" />
        购物车
      </mt-tab-item>
      <mt-tab-item id="Search">
        <img slot="icon" src="./assets/image/chazhao.jpg" />
        查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<style lang="less" scoped>
</style>
<script>
export default {
  data() {
    return {
      selected: ""
    };
  },
  // 监听事件
  watch: {
    selected: function(newV, oldV) {
      // console.log(newV,oldV);
      this.$router.push({ name: this.selected });
    }
  }
};
</script>