<template>
  <div id="listshow">
    <div>
      <ul>
        <li v-for="item in listgoods" :key="item.iid">
          <router-link :to="'/listdetail/'+item.iid">
            <img v-lazy="item.show.img" alt />
          </router-link>
          <br />
          <span style="color:pink" >{{item.title}}</span>
          <p style="text-decoration:line-through;text-align:left">{{'原价'+item.orgPrice}}</p>
          <span style="color:red;text-align:left;font-size:18px">{{'现价'+'￥'+item.price}}</span>
          <br />
          <span class="iconfont icon-gouwuche">加入购物车</span>
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
      type: Array,
      default() {
        return [];
      }
    }
  },
  mounted() {},
  watch: {
    index: function(newvalue, oldvalue) {
      //console.log(newvalue, oldvalue);
    }
  },
  created() {},
  computed: {},
  methods: {
    
  }
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
    }
    label {
      font-size: 20px;
      color: red;
    }
  }
}
</style>