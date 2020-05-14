<template>
  <div id="app">
    <div class="header">
      <router-link to="/home">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/first">first</router-link>|
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
