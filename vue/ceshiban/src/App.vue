<template>
  <div id="app">
      <router-link to="/Home"><span>标签1</span></router-link>
      <router-link to="/About"><span>标签2</span></router-link>
      <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
<script>
export default {
  data() {
    return {
      active: 2
    }
    },
    methods:{
    
  }
};
</script>
