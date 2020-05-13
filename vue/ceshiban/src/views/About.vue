<template>
  <div class="about">
    <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)" @click="add()">提交</van-button>
  <br>
  <Icon type="ios-arrow-back" />
  </div>
</template>
<style scoped>
</style>
<script>
import { Button } from 'vant';
export default {
  
  data() {
    return {};
  },
  methods: {
    add(){
      alert(1)
    }
  }
};
</script>