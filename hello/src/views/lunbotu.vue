<template>
  <div class="first">
    <header id="header">
      <!-- 左边边框设置-->
      <div class="side"></div>
      <!-- 左边边框内容设置 -->
      <div class="side-content" id="sidel">
        <div class="side-content-">
          <a href="#">手机、配件</a>
          <span>&#xe665;</span>
        </div>
        <div class="side-content-">
          <a href="#">电脑</a>
          <span>&#xe665;</span>
        </div>
        <div class="side-content-">
          <a href="#">家用电器</a>
          <span>&#xe665;</span>
        </div>
        <div class="side-content-">
          <a href="#">家具</a>
          <span>&#xe665;</span>
        </div>
      </div>
      <!-- 右边框设置-->
      <div class="side-rightcontent hidden" id="sider">
        <!-- 右边框内容 -->
        <div class="side-rightcontent-">
          <div class="side-rightcontent-top">
            <span>手机、配件</span>
          </div>
          <div class="side-rightcontent-bottom">
            <span>手机通讯：</span>
            <a href="#">手机</a>
            <i>/</i>
            <a href="#">手机维修</a>
            <i>/</i>
            <a href="#">已旧换新</a>
          </div>
          <div class="side-rightcontent-bottom">
            <span>手机配件：</span>
            <a href="#">手机壳</a>
            <i>/</i>
            <a href="#">手机存储卡</a>
            <i>/</i>
            <a href="#">数据线</a>
          </div>
          <div class="side-rightcontent-bottom">
            <span>运营商：</span>
            <a href="#">中国联通</a>
            <i>/</i>
            <a href="#">中国移动</a>
            <i>/</i>
            <a href="#">中国电信</a>
          </div>
          <div class="side-rightcontent-bottom">
            <span>娱乐：</span>
            <a href="#">耳机</a>
            <i>/</i>
            <a href="#">音响</a>
            <i>/</i>
            <a href="#">麦克风</a>
          </div>
        </div>
        <!-- 右边框内容二 -->
        <div class="side-rightcontent-">
          <div class="side-rightcontent-top">
            <span>电脑</span>
          </div>
          <div class="side-rightcontent-bottom">
            <span>电脑：</span>
            <a href="#">笔记本</a>
            <i>/</i>
            <a href="#">平板</a>
            <i>/</i>
            <a href="#">一体机</a>
          </div>
          <div class="side-rightcontent-bottom">
            <span>电脑配件：</span>
            <a href="#">显示器</a>
            <i>/</i>
            <a href="#">cpu</a>
            <i>/</i>
            <a href="#">主板</a>
          </div>
          <div class="side-rightcontent-bottom">
            <span>游戏设备：</span>
            <a href="#">游戏机</a>
            <i>/</i>
            <a href="#">耳机</a>
            <i>/</i>
            <a href="#">游戏软件</a>
          </div>
          <div class="side-rightcontent-bottom">
            <span>外部产品：</span>
            <a href="#">鼠标</a>
            <i>/</i>
            <a href="#">键盘</a>
            <i>/</i>
            <a href="#">u盘</a>
          </div>
        </div>
        <!-- 右边框内容三 -->
        <div class="side-rightcontent-">
          <div class="side-rightcontent-top">
            <span>家用电器</span>
          </div>
          <div class="side-rightcontent-bottom">
            <span>电视：</span>
            <a href="#">国产品牌</a>
            <i>/</i>
            <a href="#">韩国品牌</a>
            <i>/</i>
            <a href="#">欧美品牌</a>
          </div>
          <div class="side-rightcontent-bottom">
            <span>空调：</span>
            <a href="#">显示器</a>
            <i>/</i>
            <a href="#">柜式</a>
            <i>/</i>
            <a href="#">中央</a>
          </div>
          <div class="side-rightcontent-bottom">
            <span>冰箱：</span>
            <a href="#">对门</a>
            <i>/</i>
            <a href="#">多开门</a>
            <i>/</i>
            <a href="#">双门</a>
          </div>
          <div class="side-rightcontent-bottom">
            <span>厨房电器：</span>
            <a href="#">抽烟机</a>
            <i>/</i>
            <a href="#">洗碗机</a>
            <i>/</i>
            <a href="#">燃气灶</a>
          </div>
        </div>
        <!-- 右边框内容四 -->
        <div class="side-rightcontent-">
          <div class="side-rightcontent-top">
            <span>家具</span>
          </div>
          <div class="side-rightcontent-bottom">
            <span>家纺：</span>
            <a href="#">被子</a>
            <i>/</i>
            <a href="#">枕头</a>
            <i>/</i>
            <a href="#">四件套</a>
          </div>
          <div class="side-rightcontent-bottom">
            <span>灯具：</span>
            <a href="#">顶灯</a>
            <i>/</i>
            <a href="#">台灯</a>
            <i>/</i>
            <a href="#">节能灯</a>
          </div>
          <div class="side-rightcontent-bottom">
            <span>家装：</span>
            <a href="#">地毯</a>
            <i>/</i>
            <a href="#">沙发</a>
            <i>/</i>
            <a href="#">窗帘</a>
          </div>
          <div class="side-rightcontent-bottom">
            <span>生活产品：</span>
            <a href="#">收纳用品</a>
            <i>/</i>
            <a href="#">浴室用品</a>
            <i>/</i>
            <a href="#">雨衣雨伞</a>
          </div>
        </div>
      </div>
      <!-- 大图片设置 -->
      <div class="main" id="main">
        <a href="#">
          <div class="tupian tupian1"></div>
        </a>
        <a href="#">
          <div class="tupian tupian2"></div>
        </a>
        <a href="#">
          <div class="tupian tupian3"></div>
        </a>
      </div>
      <!--左右按钮设置 -->
      <a href="#" class="button left" id="btl"></a>
      <a href="#" class="button right" id="btr"></a>
      <!-- 小按钮设置 -->
      <div class="dots" id="dots">
        <span class="xiaodian"></span>
        <span class></span>
        <span class></span>
      </div>
    </header>
     <button @click="methods1">轮播图演示</button>  
  </div>
</template>

<style scoped>
@import "./lbt/lunbo.css";
</style>

<script>
import { lunbotu } from "./lbt/lunbo";
export default {
  data() {
    return {};
  },
   methods:{
     methods1:function(){
        lunbotu();
        }
}
}
</script>
