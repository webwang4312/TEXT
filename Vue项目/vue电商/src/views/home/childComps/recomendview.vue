<template>
  <div id="images">
    <ul>
      <li v-for="item in imged" :key="item.sort">
        <a :href="item.link">
          <img :src="item.image" />
          <p style="text-align:center">{{item.title}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>
<style lang="less" scoped>
#images{
  margin-top: 19px;
}
ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  li {
    list-style: none;
    img {
      width: 100%;
    }
  }
}
</style>
<script>
// 后台数据接收
import { getHomeMultidata } from "network/home.js";
export default {
  name: "images",
  data() {
    return { imged: [] };
  },
  // 监听imged
  watch:{
    // imged: function(val, oldVal) {
    //   console.log(val,oldVal);
    // }
  },
  created() {
    getHomeMultidata().then(res => {
      //console.log(res.data.recommend.list);
      let data = res.data.recommend;
      for (let i = 0; i < data.list.length; i++) {
        this.imged.push(data.list[i]);
      }
      //console.log(this.imged);
    });
  }
};
</script>