<template>
  <div id="app">
    <router-view/>
    <!-- 底部栏 -->
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<style lang="less">
@import 'assets/css/base.css';
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
<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar.vue';
export default {
  components:{
    MainTabBar,
  }
}
</script>
