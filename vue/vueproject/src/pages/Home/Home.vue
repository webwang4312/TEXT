<template>
  <div class="home">
    <!-- 轮播图 -->
    <mt-swipe :auto="3000" style="height:250px;background:red">
      <mt-swipe-item v-for="(item,index) in imgs" :key="index">
        <img src="item.img" alt="chucuo" />
      </mt-swipe-item>
    </mt-swipe>

<button @click="click">22</button>
    <!-- 九宫格 -->
    <div class="list">
      <ul>
        <li v-for="(grid,index) in grids" :key="index">
          <router-link to="grid.router">
            <img :src="grid.src" alt />
          </router-link>
          <router-view />
          <p>{{grid.title}}</p>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>
<style lang="less" scoped>
.list {
  width: 100%;
  height: 100%;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 33%;
      height: 100px;
      text-align: center;
      font-size: 14px;
      margin-top: 15px;
      a {
        display: inline-block;
        width: 50px;
        height: 50px;
        img {
          width: 33px;
          height: 33px;
        }
      }
    }
  }
}
</style>

<script>
// 九宫格
import src1 from "../../assets/image/huiyaun.jpg";
import src2 from "../../assets/image/gouwuche.jpg";
import src3 from "../../assets/image/chazhao.jpg";
import src4 from "../../assets/image/huiyaun.jpg";
import src5 from "../../assets/image/gouwuche.jpg";
import src6 from "../../assets/image/chazhao.jpg";

var grids = [
  { id: 1, src: src1, title: "新闻资讯", router: { name: "news.list" } },
  {
    id: 2,
    src: src2,
    title: "图文分享",
    router: { name: "photo.list" },
    params: { categoryId: 0 }
  },
  {
    id: 3,
    src: src3,
    title: "商品展示",
    router: { name: "good.list", params: { page: 1 } }
  },
  { id: 4, src: src4, title: "资讯", router: { name: "news.list" } },
  { id: 5, src: src5, title: "留言反馈", router: { name: "news.list" } },
  { id: 6, src: src6, title: "联系我们", router: { name: "news.list" } }
];
name: "Home";

export default {
  data() {
    return {
      imgs: [],
      grids: grids
    };
  },
  methods:{
click() {
    this.$fetch("getlunbo", {
     
    })
      .then(r => {
        console.log(r.data);
      })
      .catch(err => {
        console.log('err');
      });
  }
  }
  
};
</script>