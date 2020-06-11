<template>
  <div id="listshow">
    <div>
      <ul>
        <li v-for="item in listgoods['pop'].list" :key="item.iid">
          <router-link :to="{path:'/detail',query:{iid:item.iid}}">
            <img v-lazy="item.show.img" alt />
          </router-link>
          <br />
          <span style="color:pink">{{item.title}}</span>
          <p style="text-decoration:line-through;text-align:left">{{'原价'+item.orgPrice}}</p>
          <span style="color:red;text-align:left;font-size:18px">{{'现价'+'￥'+item.price}}</span>
          <br />
          <p class="iconfont icon-gouwuche" style="text-align:right">加入购物车</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "listshow",
  components: {},
  data() {
    return {
     
    };
  },
  props: {
    listgoods: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  mounted() {
    //document.addEventListener('scroll',this.scrollLoad)
  },
  watch: {},
  created() {},
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
#listshow ul {
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  li {
    width: 45%;
    margin-left: 4.5%;
    margin-bottom: 10px;
    margin-top: 20px;
    border-radius: 20px;
    img {
      width: 100%;
      height: 241px;
    }
    label {
      font-size: 20px;
      color: red;
    }
  }
}
</style>