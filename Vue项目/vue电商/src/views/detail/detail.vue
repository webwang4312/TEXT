<template>
  <div id="detail">
    <!-- 插槽引用 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <div style="margin-top:44px">
<p>{{$route.query.iid}}</p>
    </div>
    
  </div>
</template>

<script>
// 导入顶部插槽
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  name: "Home",
  components: {
    NavBar,
  },
  data() {
    return {};
  },
  // 计算属性
  computed: {},
  mounted() {},
  // 创建后加载请求
  created() {
   
  },
  methods: {},
 getdetail(){
   let iid=this.$route.query.iid;
   console.log(this.$router);
   
 }
};
</script>

<style scoped lang='less'>
</style>
