<template>
  <div id="listdetail">
    <el-button type="info" round @click="returned">返回</el-button>
    <div class="zhanshi">
      <img :src="shopdetail.show.img" alt />
    </div>
  </div>
</template>

<script>
import { getHomeGoods } from "network/home";
export default {
  name: "listdetail",
  data() {
    return {
      iid: "",
      shopdetail: [],
      pages:1
    };
  },
  props: {},

  mounted() {
    console.log(this.$data.pages);
    
    this.pages=2;
    this.iid = this.$route.params.iid;
  },

  created() {
    getHomeGoods("pop", this.pages).then(res => {
      let boom = res.data.list;
      for (let i = 0; i < boom.length; i++) {
        if (this.iid == boom[i].iid) {
          this.shopdetail = boom[i];
        }
      }
    });
  },

  methods: {
    returned() {
      this.$router.push({ path: "/home" });
    }
  }
};
</script>
<style lang="less" scoped>
.zhanshi {
  width: 100%;
  height: 300px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>