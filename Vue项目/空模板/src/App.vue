<template>
  <div id="app">
    <router-view/>
    <!-- 这里就是底部Tab -->
    <main-tab-bar></main-tab-bar>
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


<style lang="less">
@import 'assets/css/base.css';
</style>
