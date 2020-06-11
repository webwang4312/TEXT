<template>
  <div id="MainTabBar">
    <!-- 底部栏固定效果 -->
    <tab-bar-item link="/home">
      <img slot="icon" src="~assets/images/tabbar/home.svg" alt />
      <img slot="active-icon" src="~assets/images/tabbar/home_active.svg" alt />
      <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/category">
      <img slot="icon" src="~assets/images/tabbar/category.svg" alt />
      <img slot="active-icon" src="~assets/images/tabbar/category_active.svg" alt />
      <div slot="text">分类</div>
    </tab-bar-item>
    <tab-bar-item link="/cart">
      <img slot="icon" src="~assets/images/tabbar/cart.svg" alt />
      <img slot="active-icon" src="~assets/images/tabbar/cart_active.svg" alt />
      <div slot="text">购物车</div>
    </tab-bar-item>
    <tab-bar-item link="/user">
      <img slot="icon" src="~assets/images/tabbar/profile.svg" alt />
      <img slot="active-icon" src="~assets/images/tabbar/profile_active.svg" alt />
      <div slot="text">我的</div>
    </tab-bar-item>
  </div>
</template>

<script>
// 导入TabBarItem插槽
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBarItem,
  }
};
</script>

<style scoped>
/* 底部栏样式设置 */
#MainTabBar{
  width: 100%;
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  justify-content: space-around;
  align-items: center;
  background-color: pink;
}
</style>
