<template>
  <div id="user-info">
    <el-row>
      <el-col :span="6">
        <div class="iconfont icon-yonghu" style="font-size:60px"></div>
      </el-col>
      <el-col :span="16">
        <div class="zhuce" style="line-height:30px">
          <router-link to="/login">
            <span style="color:snow">登录/注册</span>
          </router-link>
          <router-view></router-view>
          <br />
          <span class="iconfont icon-shouji"></span>
          <span>暂无绑定手机号</span>
        </div>
      </el-col>
      <el-col :span="2">
        <router-link to="/login">
          <div class="iconfont icon-iconfontjiantou5"></div>
        </router-link>
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: "UserInfo",
  components: {

  },
  methods: {}
};
</script>

<style scoped lang='less'>
#user-info {
  height: 80px;
  color: snow;
  background-color: #ff8198;
  .zhuce span {
    font-size: 20px;
  }
}
.icon-iconfontjiantou5 {
  color: snow;
  line-height: 80px;
  font-size: 40px;
  margin-left: -16px;
}
</style>
