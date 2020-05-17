<template>
  <div id="app">
    <div class="header">
      <router-link to="/home">Home</router-link>|
      <router-link to="/lunbotu">lunbotu</router-link>|
      <router-link to="/shangcheng">shangcheng</router-link>|
      <router-view />
    </div>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: snow;
  .header {
    width: 100%;
    height: 40px;
  }
}
</style>
