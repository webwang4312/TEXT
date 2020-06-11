<template>
<!-- detail顶部栏固定 -->
  <nav-bar class="detail-nav">
    <img slot="left" class="back" @click="backClick" src="~assets/images/common/back.svg" />
    <div class="title" slot="center">
      <span
        class="title-item"
        v-for="(item, index) in titleInfos"
        :key="index"
        :class="{'active': index===currentIndex}"
        @click="itemClick(index)"
      >{{item}}</span>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  props: {
    titleInfos: {
      type: Array,
      default: () => {
        return ["商品", "参数", "评论", "推荐"];
      }
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    itemClick: function(index) {
      this.$emit("itemClick", index);
    },
    backClick() {
      this.$router.back();
    }
  }
};
</script>

<style scoped lang='less'>
.detail-nav {
  background-color: #fff;
  font-weight: normal;
  position: fixed;
    top: 0;
  img{
    height:60%;
  }
}

.title {
  display: flex;
  padding: 0 20px;
  font-size: 14px;
}

.title-item {
  flex: 1;
}

.title-item.active {
  color: var(--color-high-text);
}

.back {
  margin-top: 11px;
}
</style>
