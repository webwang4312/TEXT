<template>
  <div id="app">
    <keep-alive>
       <router-view v-if='$route.meta.keepAlive'></router-view>
    </keep-alive>
     <router-view v-if='!$route.meta.keepAlive'/>
     
    

    <!-- 底部栏 -->
    <main-tab-bar v-if="showMinShopTab"></main-tab-bar>
  </div>
</template>

<style lang="less">
@import "assets/css/base.css";
#MainTabBar {
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
<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar.vue";
export default {
  components: {
    MainTabBar
  },
  data() {
    return {
      showMinShopTab: true //这就是控制底部栏是否显示的属性啦
    };
  },
  watch: {
    $route(to, from) {
      if (
        to.path === "/home" ||
        to.path === "/user" ||
        to.path === "/category" ||
        to.path === "/cart"
      ) {
        this.showMinShopTab = true;
      } else {
        this.showMinShopTab = false;
      }
    }
  }
};
</script>
