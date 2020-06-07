<template>
  <div id="app">  
    <!-- 路由出口 -->
      <router-view></router-view>
    <main-tab-bar> 
    </main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabbar/MainTabBar.vue';
  export default {
    name: 'app',
    components: {
      MainTabBar,
    
      
    }
  }
</script>


<style lang="less" scoped>
@import 'assets/css/base.css';
</style>
